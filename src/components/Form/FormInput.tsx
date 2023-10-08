import { Input } from "antd"; 
import { getErrorMessageByPropertyName } from "@/utils/schema-validation";
import { Controller, useFormContext } from "react-hook-form";

interface IInputProps {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}

export default function FormInput({
  id,
  name,
  type,
  size,
  value,
  label,
  validation,
  placeholder,
}: IInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? (
        <span style={{ display: "block", marginBottom: "2px" }}> {label}</span>
      ) : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              {...field}
              type={type}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              {...field}
              type={type}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
            />
          )
        }
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
}
