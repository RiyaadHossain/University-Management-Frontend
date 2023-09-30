import { Button } from "antd";
import Link from "next/link";

export default function ManageStudentsPage() {
  return (
    <div>
      <h1 style={{ margin: "10px 0" }}>Manage Student Page</h1>
      <Link href="manage-student/create">
        <Button type="primary">Create Student</Button>
      </Link>
    </div>
  );
}
