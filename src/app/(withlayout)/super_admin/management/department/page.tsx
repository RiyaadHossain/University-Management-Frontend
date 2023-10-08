"use client";
import Link from "next/link";
import { Button, Input, Space, message } from "antd";
import { ColumnsType } from "antd/es/table";
import { UMTable } from "@/components/ui/UMTable";
import {
  useDeleteDepartmentMutation,
  useGetDepartmentsQuery,
} from "@/redux/api/departmentApi";
import { useState } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useDebounce } from "@/hooks/debounce";

export default function DepartmentPage() {
  const [deleteDepartment] = useDeleteDepartmentMutation();

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

  const { data, isLoading } = useGetDepartmentsQuery({ ...query });

  const departments = data?.departments;
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
      //   console.log(data);
      await deleteDepartment(id);
      message.success("Department deleted successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const columns: ColumnsType = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: true,
    },
    {
      title: "Action",
      key: "action",
      render: (data) => {
        return (
          <Space size="middle">
            <Link href={`department/edit/${data._id}`}>
              <Button type="primary">
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => onDeleteHandler(data._id)} danger>
              <DeleteOutlined />
            </Button>
          </Space>
        );
      },
    },
  ];
  
  const onClearFilter = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <h1 style={{ margin: "10px 0" }}>Department Page</h1>
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
        <Link href="department/create">
          <Button type="primary">Create Department</Button>
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
          dataSource={departments}
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
