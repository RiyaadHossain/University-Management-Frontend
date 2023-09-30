export const getErrorMessageByPropertyName = (
  errorObj: Record<string, any>,
  propertyPath: string
) => {
  // let obj = errors
  // let propertyPath = "admin.name.firstName"
  // let propertyPath = "admin.name.lastName"
  //   console.log(propertyPath, errorObj);

  const properties = propertyPath.split(".");
  // ["admin","name","firstName"]
  // ["admin","name","lastName"]
  console.log(propertyPath, properties);
  let error = errorObj;

  for (let prop of properties) {
    if (error[prop]) {
      error = error[prop];
    } else {
      return undefined;
    }
  }
  //   console.log(error);

  return error.message;
};
