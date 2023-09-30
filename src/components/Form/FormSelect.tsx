import { getErrorMessageByPropertyName } from "@/utils/schema-validation";
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type OptionType = {
  value: string;
  label: string;
};

interface ISelectProps {
  name: string;
  size?: "large" | "small";
  defaultValue?: string;
  id?: string;
  placeholder?: string;
  label?: string;
  options: OptionType[];
}

export default function FormSelect({
  id,
  name,
  size,
  defaultValue,
  label,
  placeholder,
  options,
}: ISelectProps) {
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
        render={({ field }) => (
          <Select
            {...field}
            size={size}
            placeholder={placeholder}
            style={{ width: "100%" }}
            defaultValue={defaultValue}
            options={options}
          />
        )}
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
}
