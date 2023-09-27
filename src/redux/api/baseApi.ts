import { axiosBaseQuery } from "@/helper/axios/axiosBaseQuery";
import { getBaseURL } from "@/helper/config";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseURL() }),
  endpoints: () => ({}),
  tagTypes: ["User"],
});
