"use client";

import { Layout } from "antd";
import { IChildrenCoponent } from "@/interface/common";
import Sidebar from "@/components/ui/Sidebar";
import Contents from "@/components/ui/Contents";

const DashboardLayout = ({ children }: IChildrenCoponent) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
