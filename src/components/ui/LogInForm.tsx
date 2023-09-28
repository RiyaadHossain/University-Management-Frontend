"use client";

import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/service/auth.services";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { Button } from "antd";

type FormValues = {
  id: string;
  password: string;
};

export default function LogInForm() {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    const res = await userLogin(data).unwrap();
    storeUserInfo(res?.accessToken);
    router.push("/profile");
  };

  return (
    <>
      <h1 style={{ margin: "16px 0" }}>Please LogIn First</h1>
      <div>
        <Form submitHandler={onSubmit}>
          <div>
            <FormInput name="id" type="text" size="large" label="User Id" />
          </div>
          <div style={{ margin: "10px 0" }}>
            <FormInput
              name="password"
              type="password"
              size="large"
              label="User Password"
            />
          </div>
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        </Form>
      </div>
    </>
  );
}
