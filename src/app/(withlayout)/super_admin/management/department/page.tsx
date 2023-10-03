"use client";

import Link from "next/link";
import { Button, Space, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { UMTable } from "@/components/ui/UMTable";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a: any, b: any) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (data, record) => {
      return (
        <Space size="middle">
          <Button onClick={() => console.log(data)} danger>
            Delete {record.name}
          </Button>
        </Space>
      );
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const onPageChange = (page: number, pageSize: number) => {
  console.log("onPageChange: ", page, pageSize);
};

const onTableChange = (pagination: any, filters: any, sorter: any) => {
  console.log("onTableChange: ", pagination, filters, sorter);
};

export default function DepartmentPage() {
  return (
    <div>
      <h1 style={{ margin: "10px 0" }}>Department Page</h1>
      <Link href="department/create">
        <Button type="primary">Create Department</Button>
      </Link>
      <div
        style={{
          marginTop: "25px",
        }}
      >
        <UMTable
          loading={false}
          columns={columns}
          dataSource={data}
          pageSize={10}
          totalPages={55}
          showSizeChanger={true}
          onPaginationChange={onPageChange}
          onTableChange={onTableChange}
          showPagination={true}
        />
      </div>
    </div>
  );
}
