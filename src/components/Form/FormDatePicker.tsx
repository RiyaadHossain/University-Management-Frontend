import { DatePicker, DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

type UMDatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: "large" | "small";
};

export default function FormDatePicker({
  name,
  label,
  onChange,
  size = "large",
}: UMDatePikerProps) {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };
  return (
    <>
      {label ? <span> {label}</span> : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            {...field}
            value={dayjs(field.value) || ""}
            size={size}
            onChange={handleOnChange}
            style={{ width: "100%" }}
          />
        )}
      />
    </>
  );
}
