import { Layout } from "antd";
import { IChildrenCoponent } from "@/interface/common";
import UMBreadCrum from "./UMBreadCrum";
import Header from "./Header";
import { getUserInfo } from "@/service/auth.services";

const { Content, Footer } = Layout;

export default function Contents({ children }: IChildrenCoponent) {
  const { role } = getUserInfo() as any;

  const breadcrumItems = [
    {
      label: `${role}`,
      link: `/${role}`,
    },
    {
      label: "student",
      link: `/${role}/student`,
    },
    {
      label: "student",
    },
  ];

  return (
    <Layout>
      <Content>
        <Header />
        <div
          style={{
            padding: 15,
            minHeight: "100vh",
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
