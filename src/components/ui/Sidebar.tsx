import { useState } from "react";
import { Layout, Menu } from "antd";

import { ENUM_USER_ROLE } from "@/constant/role";
import sidebarItems from "@/constant/sidebarItems";

const { Sider } = Layout;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const role = ENUM_USER_ROLE.STUDENT;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      {!collapsed && (
        <div
          style={{
            color: "white",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "bold",
            margin: "1rem 0",
          }}
        >
          PH-University
        </div>
      )}
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
}
