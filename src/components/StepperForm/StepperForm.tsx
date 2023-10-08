import React, { useEffect, useState } from "react";
import { Button, message, Steps } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { useRouter } from "next/navigation";

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  submitHandler: (el: any) => void;
  navigateLink?: string;
}

export const StepperForm = ({
  steps,
  submitHandler,
  navigateLink,
}: IStepsProps) => {
  const route = useRouter();
  const catchedStep = Number(
    JSON.parse(getFromLocalStorage("studentFormStep") as string)?.step
  );
  const [current, setCurrent] = useState(catchedStep ? catchedStep : 0);

  useEffect(() => {
    setToLocalStorage("studentFormStep", JSON.stringify({ step: current }));
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
    navigateLink && route.push(navigateLink);
    setToLocalStorage("studentFormStep", JSON.stringify({ step: 0 }));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Steps current={current} items={items} />
        <div style={{ marginTop: "10px" }}>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
