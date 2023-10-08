"use client";
import { UMTable } from "@/components/ui/UMTable";
import { useDebounce } from "@/hooks/debounce";

import { Button, Input, Space, message } from "antd";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { useState } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { IDepartment } from "@/interface/common";
import dayjs from "dayjs";
import {
  useDeleteAdminMutation,
  useGetAdminsQuery,
} from "@/redux/api/adminApi";

export default function ManageAdminPage() {
  const [deleteAdmin] = useDeleteAdminMutation();

  const query: Record<string, unknown> = {};

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("");

  const delay = 600;
  const debounceTerm = useDebounce({ searchTerm, delay });

  query["page"] = page;
  query["limit"] = limit;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  if (!!debounceTerm) {
    query["searchTerm"] = debounceTerm;
  }

  const { data, isLoading } = useGetAdminsQuery({ ...query });

  const admins = data?.admins;
  const meta = data?.meta;

  const onPageChange = (page: number, limit: number) => {
    setPage(page);
    setLimit(limit);
  };

  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    if (Object.keys(sorter).length) {
      let sortOrder = "asc";
      if (sorter.order === "descend") sortOrder = "desc";
      else sortOrder = "asc";

      setSortOrder(sortOrder);
      setSortBy(sorter.field);
    }
  };

  const onDeleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      await deleteAdmin(id);
      message.success("Department deleted successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const columns: ColumnsType = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: function (data: Record<string, string>) {
        const fullName = `${data?.firstName} ${data?.middleName} ${data?.lastName}`;
        return <>{fullName}</>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Department",
      dataIndex: "managementDepartment",
      render: function (data: IDepartment) {
        return <>{data?.title}</>;
      },
    },
    {
      title: "Designation",
      dataIndex: "designation",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Contact no.",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/super_admin/admin/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/super_admin/admin/edit/${data.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => console.log(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onClearFilter = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  console.log(data);
  return (
    <div>
      <h1 style={{ margin: "10px 0" }}>Admin Page</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "5px" }}
        >
          <Input
            size="large"
            style={{ maxWidth: "300px" }}
            placeholder="Search......."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button size="large" danger onClick={onClearFilter}>
            Clear Filter
          </Button>
        </div>
        <Link href="manage-admin/create">
          <Button type="primary">Create Admin</Button>
        </Link>
      </div>
      <div
        style={{
          marginTop: "25px",
        }}
      >
        <UMTable
          loading={isLoading}
          columns={columns}
          dataSource={admins}
          pageSize={limit}
          totalPages={meta?.total}
          showSizeChanger={true}
          onPaginationChange={onPageChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
      </div>
    </div>
  );
}
