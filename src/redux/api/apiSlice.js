import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://emedicine.vercel.app/api/v1",
    baseUrl: "http://localhost:5000",
  }),

  tagTypes: ["address", "phone", "email", "data"],

  endpoints: () => ({}),
});
