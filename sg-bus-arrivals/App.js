import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// redux
import { busStore } from "./src/store/busStore";
import { Provider } from "react-redux";

//screens
import HomeScreen from "./src/screens/HomeScreen";
import NearbyScreen from "./src/screens/NearbyScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={busStore}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Nearby" component={NearbyScreen} />
          <Tab.Screen name="Favorite" component={FavoriteScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
