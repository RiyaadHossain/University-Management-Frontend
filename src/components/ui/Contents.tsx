import { Layout } from "antd";
import { IChildrenCoponent } from "@/interface/common";
import UMBreadCrum from "./UMBreadCrum";
import Header from "./Header";

const { Content, Footer } = Layout;

export default function Contents({ children }: IChildrenCoponent) {
  const base = "admin";
  const breadcrumItems = [
    {
      label: `${base}`,
      link: `/${base}`,
    },
    {
      label: "student",
      link: `/${base}/student`,
    },
    {
      label: "student",
    },
  ];

  return (
    <Layout>
      <Content style={{ margin: "0 10px" }}>
        <div
          style={{
            padding: 12,
            minHeight: "100vh",
            color: "black",
          }}
        >
          <Header />
          <UMBreadCrum items={breadcrumItems} />
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}
