import { View, Text } from "react-native";
import React from "react";
import { useGetBusStopBusesQuery } from "../features/busSlice";
import { timeToArrival } from "../features/timeHelper";

const HomeScreen = ({ navigation }) => {
  const { data, error, isLoading } = useGetBusStopBusesQuery("84629");

  if (!isLoading) {
    console.log(data.BusStopCode);
    console.log(data.Services[0].ServiceNo);
  }

  let buses = data?.Services?.map((bus) => {
    const convertedArrivalTime = timeToArrival(bus.NextBus.EstimatedArrival);

    return (
      <View key={bus.ServiceNo}>
        <Text>{bus.ServiceNo}</Text>
        <Text>{bus.NextBus.EstimatedArrival}</Text>
        <Text>{convertedArrivalTime}</Text>
        <Text>{bus.NextBus.Load}</Text>
        <Text>{bus.NextBus2.EstimatedArrival}</Text>
      </View>
    );
  });

  return (
    <View className="">
      <Text className="text-red-900">HomeScreen</Text>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {buses}
    </View>
  );
};

export default HomeScreen;
