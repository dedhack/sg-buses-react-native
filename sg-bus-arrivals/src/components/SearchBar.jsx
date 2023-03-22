import { View, Text, TextInput } from "react-native";
import React from "react";

const SearchBar = () => {
  return (
    <View className="bg-white">
      <TextInput className="text-white" placeholder="Search for Bus Stop" />
    </View>
  );
};

export default SearchBar;
