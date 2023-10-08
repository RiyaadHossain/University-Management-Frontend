import { Button } from "antd";
import Link from "next/link";

export default function ManageFacultyPage() {
  return <div>
  <h1 style={{ margin: "10px 0" }}>Manage Faculty Page</h1>
  <Link href="manage-faculty/create">
    <Button type="primary">Create Faculty</Button>
  </Link>
</div>;
}
