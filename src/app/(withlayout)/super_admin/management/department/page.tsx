import { Button } from "antd";
import Link from "next/link";

export default function DepartmentPage() {
  return (
    <div>
      <h1 style={{ margin: "10px 0" }}>Department Page</h1>
      <Link href="department/create">
        <Button type="primary">Create Department</Button>
      </Link>
    </div>
  );
}
