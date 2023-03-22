import { View, Text, FlatList } from "react-native";
import React from "react";
import { useGetBusStopBusesQuery } from "../features/busSlice";

import BusRow from "../components/BusRow";

const HomeScreen = ({ navigation }) => {
  const { data, error, isLoading } = useGetBusStopBusesQuery("84629");

  return (
    <View className="bg-gray-900 flex-1">
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}

      {data?.Services && !isLoading ? (
        <FlatList
          className="mt-4"
          data={data.Services}
          keyExtractor={(bus) => bus.ServiceNo}
          renderItem={({ item }) => <BusRow bus={item} />}
        />
      ) : null}
    </View>
  );
};

export default HomeScreen;
