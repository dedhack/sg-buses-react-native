import { View, Text, FlatList } from "react-native";
import React from "react";
import { useGetBusStopBusesQuery } from "../features/busSlice";
import { timeToArrival } from "../features/timeHelper";

import BusRow from "../components/BusRow";

const HomeScreen = ({ navigation }) => {
  const { data, error, isLoading } = useGetBusStopBusesQuery("84629");

  // if (!isLoading) {
  //   console.log(data.BusStopCode);
  //   console.log(data.Services[0].ServiceNo);
  // }

  return (
    <View className="bg-gray-900 flex-1">
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}

      {data?.Services && !isLoading ? (
        <FlatList
          data={data.Services}
          keyExtractor={(bus) => bus.ServiceNo}
          renderItem={({ item }) => <BusRow bus={item} />}
        />
      ) : null}
    </View>
  );
};

export default HomeScreen;
