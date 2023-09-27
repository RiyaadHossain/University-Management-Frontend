import { baseApi } from "./baseAPI";

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: ``,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useUserLoginMutation } = extendedApi;
