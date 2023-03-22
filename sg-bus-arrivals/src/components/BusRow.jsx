import { View, Text, FlatList } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { timeToArrival } from "../features/timeHelper";

const busAvailability = {
  SEA: "green",
  SDA: "yellow",
  LSD: "red",
};

const BusRow = ({ bus }) => {
  // for each bus object, we will want to retrieve the following data:
  // bus.ServiceNo
  // bus.NextBus.EstimatedArrival
  // bus.NextBus.Load -> SEA, SDA, LSD
  // bus.NextBus.Feature -> WAB || blank
  // bus.NextBus.Type -> DD, SD, BD
  //   console.log("busrow", bus);

  const firstArrival = timeToArrival(bus.NextBus.EstimatedArrival);
  const secondArrival = timeToArrival(bus.NextBus2.EstimatedArrival);
  const thirdArrival = timeToArrival(bus.NextBus3.EstimatedArrival);

  // conditional rendering for bus seats
  let busSeats = null;
  if (bus.NextBus.Type === "SD") {
    busSeats = (
      <MaterialCommunityIcons
        name="bus-side"
        size={24}
        color={busAvailability[bus.NextBus.Load]}
      />
    );
  } else if (bus.NextBus.Type === "DD") {
    busSeats = (
      <MaterialCommunityIcons
        name="bus-double-decker"
        size={24}
        color={busAvailability[bus.NextBus.Load]}
      />
    );
  } else if (bus.NextBus.Type === "BD") {
    busSeats = (
      <MaterialCommunityIcons
        name="bus-articulated-front"
        size={24}
        color={busAvailability[bus.NextBus.Load]}
      />
    );
  }

  return (
    <View className="flex-row justify-between content-center border-2 border-gray-500 rounded-md my-1 p-2">
      <Text className="flex-1 font-bold text-xl text-white">
        {bus.ServiceNo}
      </Text>
      <Text className="flex-1  text-sm text-white">{firstArrival}</Text>
      <Text className="flex-1  text-sm text-white">{secondArrival}</Text>
      <Text className="flex-1  text-sm text-white">{thirdArrival}</Text>

      {/* <Text className="flex-1  text-sm text-white">{bus.NextBus.Load}</Text> */}
      {busSeats}
      <View>
        <Text className="text-xs text-white">{bus.NextBus.Type}</Text>
        <Text className="text-xs text-white">{bus.NextBus.Feature}</Text>
      </View>
    </View>
  );
};

export default BusRow;
