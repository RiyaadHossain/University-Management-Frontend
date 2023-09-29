import { removeUserInfo } from "@/service/auth.services";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, MenuProps, Row } from "antd";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;

export default function Header() {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo();
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button onClick={logOut} type="text" danger>
          LogOut
        </Button>
      ),
    },
  ];

  return (
    <AntHeader style={{ padding: "0 15px", backgroundColor: "#002140" }}>
      <Row justify="end" align="middle" style={{ height: "100%" }}>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </Row>
    </AntHeader>
  );
}
