import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const busApi = createApi({
  reducerPath: "busApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2",
    headers: {
      AccountKey: process.env.API_KEY,
    },
  }),

  tagTypes: ["BusStopBuses"],

  endpoints: (builder) => ({
    getBusStopBuses: builder.query({
      query: (busStopCode) => `?BusStopCode=${busStopCode}`,
      providesTags: (result, error, busStopCode) => [
        { type: "BusStopBuses", busStopCode },
      ],
    }),
  }),
});

export const { useGetBusStopBusesQuery } = busApi;
