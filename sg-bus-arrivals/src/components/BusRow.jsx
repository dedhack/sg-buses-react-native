import { View, Text } from "react-native";
import React from "react";

import { timeToArrival } from "../features/timeHelper";

const BusRow = ({ bus }) => {
  // for each bus object, we will want to retrieve the following data:
  // bus.ServiceNo
  // bus.NextBus.EstimatedArrival
  // bus.NextBus.Load -> SEA, SDA, LSD
  // bus.NextBus.Feature -> WAB || blank
  // bus.NextBus.Type -> DD, SD, BD

  const convertedArrivalTime = timeToArrival(bus.NextBus.EstimatedArrival);

  return (
    <View className="flex-row space-x-1 border-2 rounded-md my-1 p-2 ">
      <Text className="font-bold text-lg text-white">{bus.ServiceNo}</Text>
      {/* <Text>{bus.NextBus.EstimatedArrival}</Text> */}
      <Text className="text-sm text-white">{convertedArrivalTime}</Text>
      <Text className="text-sm text-white">{bus.NextBus.Load}</Text>
      <Text className="text-sm text-white">
        {bus.NextBus2.EstimatedArrival}
      </Text>
    </View>
  );
};

export default BusRow;
