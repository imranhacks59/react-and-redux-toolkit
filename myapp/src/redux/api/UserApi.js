import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const server = 'https://phantomhealthcare.shop'
const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${server}`,
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "/api/login/",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),

    // deleteUser: builder.mutation({
    //   query: ({ userId, adminUserId }) => ({
    //     url: `${userId}?id=${adminUserId}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["users"],
    // }),

    // allUsers: builder.query({
    //   query: (id) => `all?id=${id}`,
    //   providesTags: ["users"],
    // }),
  }),
});

// const getUser = async (id) => {
//   try {
//     const { data } = await axios.get(
//       `${import.meta.env.VITE_SERVER}/api/v1/user/${id}`
//     );

//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

const { useLoginMutation } = userAPI;

export { userAPI, useLoginMutation,};
