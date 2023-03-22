import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { busStore } from "./src/store/busStore";
import { Provider } from "react-redux";

//screens
import HomeScreen from "./src/screens/HomeScreen";
import NearbyScreen from "./src/screens/NearbyScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={busStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Nearby" component={NearbyScreen} />
          <Stack.Screen name="Favorite" component={FavoriteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
