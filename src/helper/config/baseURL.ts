export const getBaseURL = (): string => {
  return process.env.NEXT_BASE_URL || "http://localhost:5001";
};
