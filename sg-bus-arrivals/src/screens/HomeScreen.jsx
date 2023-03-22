import { View, Text } from "react-native";
import React from "react";
import { useGetBusStopBusesQuery } from "../features/busSlice";
import { timeToArrival } from "../features/timeHelper";

import BusRow from "../components/BusRow";

const HomeScreen = ({ navigation }) => {
  const { data, error, isLoading } = useGetBusStopBusesQuery("84629");

  if (!isLoading) {
    console.log(data.BusStopCode);
    console.log(data.Services[0].ServiceNo);
  }

  let buses = data?.Services?.map((bus) => {
    // pass to BusRow component the bus object
    return <BusRow bus={bus} />;
  });

  return (
    <View className="bg-gray-900 flex-1">
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {buses ? buses : null}
    </View>
  );
};

export default HomeScreen;
