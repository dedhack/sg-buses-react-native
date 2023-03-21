import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const busApi = createApi({
  reducerPath: "busApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2",
  }),
});
