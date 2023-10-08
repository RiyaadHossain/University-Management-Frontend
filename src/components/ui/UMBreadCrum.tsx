import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";
import { HomeOutlined } from "@ant-design/icons";

type IUMBreadCrumb = { items: { link?: string; label: string }[] };

export default function UMBreadCrum({ items }: IUMBreadCrumb) {
  const breadcrumItems = [
    {
      title: (
        <Link href="/">
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map((item) =>
      item.link
        ? { title: <Link href="/">{item.label}</Link> }
        : { title: <span> {item.label}</span> }
    ),
  ];

  return <Breadcrumb style={{ marginTop: "10px" }} items={breadcrumItems} />;
}
