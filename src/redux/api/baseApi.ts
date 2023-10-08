import { axiosBaseQuery } from "@/helper/axios/axiosBaseQuery";
import { getBaseURL } from "@/helper/config";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseURL() }),
  endpoints: () => ({}),
  tagTypes: tagTypes,
});
