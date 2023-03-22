import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const busApi = createApi({
  reducerPath: "busApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2",
    headers: {
      AccountKey: process.env.API_KEY,
    },
  }),

  tagTypes: ["BusArrival"],

  endpoints: (builder) => ({
    getBusStopBuses: builder.query({
      query: (busStopCode) => `?BusStopCode=${busStopCode}`,
      providesTags: ["BusArrival"],
    }),

    updateBusStopBuses: builder.mutation({
      query: (busStopCode) => `?BusStopCode=${busStopCode}`,
      invalidatesTags: ["BusArrival"],
    }),
  }),
});

export const { useGetBusStopBusesQuery, useUpdateBusStopBusesMutation } =
  busApi;
