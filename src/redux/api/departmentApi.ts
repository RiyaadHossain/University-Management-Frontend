import { IDepartment, IMeta } from "@/interface/common";
import { ENUM_TAG_TYPE } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/department-managements";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [ENUM_TAG_TYPE.department],
    }),
    getDepartment: build.query({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [ENUM_TAG_TYPE.department],
    }),
    addDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/create-department-management`,
        method: "POST",
        data,
      }),
      invalidatesTags: [ENUM_TAG_TYPE.department],
    }),
    updateDepartment: build.mutation({
      query: ({ id, data }) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [ENUM_TAG_TYPE.department],
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [ENUM_TAG_TYPE.department],
    }),
  }),
});

export const {
  useGetDepartmentsQuery,
  useGetDepartmentQuery,
  useAddDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
