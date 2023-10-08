import { IAdmin, IMeta } from "@/interface/common";
import { ENUM_TAG_TYPE } from "../tag-types";
import { baseApi } from "./baseApi";

const ADMIN_URL = "/admins";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAdminWithFormData: build.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [ENUM_TAG_TYPE.admin],
    }),

    getAdmins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ADMIN_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta,
        };
      },
      providesTags: [ENUM_TAG_TYPE.admin],
    }),

    updateAdmin: build.mutation({
      query: ({ id, data }) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [ENUM_TAG_TYPE.admin],
    }),
    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [ENUM_TAG_TYPE.admin],
    }),
  }),
});

export const {
  useGetAdminsQuery,
  useAddAdminWithFormDataMutation,
  useUpdateAdminMutation,
  useDeleteAdminMutation,
} = adminApi;
