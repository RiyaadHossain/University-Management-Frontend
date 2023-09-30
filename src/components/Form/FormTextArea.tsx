import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col  w-full`}>
      {label ? (
        <span style={{ display: "block", marginBottom: "2px" }}>{label}</span>
      ) : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
            style={{ resize: "none" }}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;