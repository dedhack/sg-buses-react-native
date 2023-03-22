import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { useGetBusStopBusesQuery } from "../features/busSlice";

import BusRow from "../components/BusRow";
import { SearchBar } from "@rneui/themed";

const HomeScreen = ({ navigation }) => {
  const { data, error, isLoading } = useGetBusStopBusesQuery("84629");
  const [search, setSearch] = useState("");

  const submitBusStop = (busStopNumber) => {
    console.log("submitting bus stop", busStopNumber);
  };

  return (
    <View className="bg-gray-900 flex-1">
      <SearchBar
        value={search}
        onChangeText={(newVal) => setSearch(newVal)}
        placeholder="Enter Bus Stop Number"
        onSubmitEditing={() => {
          submitBusStop(search);
        }}
      />
      <Text>Bus Stop: {search}</Text>
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
