export const getBaseURL = (): string => {
  return process.env.NEXT_BASE_URL || "http://localhost:5003/api/v1";
};
