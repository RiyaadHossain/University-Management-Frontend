"use client";

import { useEffect, useState } from "react";
import { Layout } from "antd";
import { IChildrenCoponent } from "@/interface/common";
import Sidebar from "@/components/ui/Sidebar";
import Contents from "@/components/ui/Contents";
import { isLoggedIn } from "@/service/auth.services";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: IChildrenCoponent) => {
  const router = useRouter();
  const userLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!userLoggedIn) router.push("/login");
    else setIsLoading(false);
  }, [userLoggedIn, router]);

  if (isLoading) return <h1>Loading... 🏃🏻</h1>;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
