import { Button } from "antd";
import Link from "next/link";

export default function ManageAdminPage() {
  return (
    <div>
      <h1 style={{ margin: "10px 0" }}>Manage Admin Page</h1>
      <Link href="manage-admin/create">
        <Button type="primary">Create Admin</Button>
      </Link>
    </div>
  );
}
