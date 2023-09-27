import { baseApi } from "./baseApi";


const AUTH_URL = "/auth";

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useUserLoginMutation } = extendedApi;
