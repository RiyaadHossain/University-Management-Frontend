import { Layout } from "antd";
import { IChildrenCoponent } from "@/interface/common";

const { Content, Footer } = Layout;

export default function Contents({ children }: IChildrenCoponent) {
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
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}
