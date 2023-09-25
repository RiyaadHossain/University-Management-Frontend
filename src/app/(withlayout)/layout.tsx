"use client";

import { Layout } from "antd";
import Sidebar from "../components/ui/Sidebar";
import Contents from "../components/ui/Contents";
import { IChildrenCoponent } from "@/interface/common";

const DashboardLayout = ({ children }: IChildrenCoponent) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
