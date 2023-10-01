export const getErrorMessageByPropertyName = (
  errorObj: Record<string, any>,
  propertyPath: string
) => {
  const properties = propertyPath.split(".");

  let error = errorObj;

  for (let prop of properties) {
    if (error[prop]) {
      error = error[prop];
    } else {
      return undefined;
    }
  }

  return error.message;
};
