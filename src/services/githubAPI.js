import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubAPI = createApi({
  reducerPath: "githubAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (builder) => ({
    getForksByName: builder.query({
      query: (name) => `/repos/${name}`,
    }),
    getForksLimit: builder.query({
      query: (name) => `/repos/${name}`,
    }),
  }),
});

export const { useGetForksByNameQuery, useGetForksLimitQuery } = githubAPI;
