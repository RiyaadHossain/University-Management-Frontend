import { Layout } from "antd";
import { IChildrenCoponent } from "@/interface/common";
import UMBreadCrum from "./UMBreadCrum";

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
  ];

  return (
    <Layout>
      <Content style={{ margin: "0 16px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            color: "black",
          }}
        >
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
