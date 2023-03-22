import { View, Text, FlatList } from "react-native";
import React from "react";

import { timeToArrival } from "../features/timeHelper";

import { MaterialIcons } from "@expo/vector-icons";

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
  if (bus.NextBus.Load === "SEA") {
    busSeats = <MaterialIcons name="directions-bus" size={24} color="white" />;
  } else if (bus.NextBus.Load === "SDA") {
    busSeats = <MaterialIcons name="directions-bus" size={24} color="yellow" />;
  } else if (bus.NextBus.Load === "LSD") {
    busSeats = <MaterialIcons name="directions-bus" size={24} color="red" />;
  }

  return (
    <View className="flex-row justify-between border-2 border-gray-500 rounded-md my-1 p-2 ">
      <Text className="flex-1 font-bold text-xl text-white">
        {bus.ServiceNo}
      </Text>
      <Text className="flex-1  text-sm text-white">{firstArrival}</Text>
      <Text className="flex-1  text-sm text-white">{secondArrival}</Text>
      <Text className="flex-1  text-sm text-white">{thirdArrival}</Text>

      <Text className="flex-1  text-sm text-white">{bus.NextBus.Load}</Text>
      {busSeats}
      <Text className="text-sm text-white">
        {/* {bus.NextBus2.EstimatedArrival} */}
      </Text>
    </View>
  );
};

export default BusRow;
