import { ENUM_TAG_TYPE } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/department-managements";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/create-department-management`,
        method: "POST",
        data,
      }),
      invalidatesTags: [ENUM_TAG_TYPE.department],
    }),
  }),
});

export const { useAddDepartmentMutation } = departmentApi;
