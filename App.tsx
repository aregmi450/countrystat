import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddCountry from "./components/AddCountry";
import ChooseCountry from "./components/CountryName";
import Details from "./screens/DetailsScreen";
import Hello from "./screens/HomeScreen";
import HomeScreen from "./screens/HomeScreen";

// move the stack
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"Details"} component={Details} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Hello />
//       <Details />
//       <AddCountry />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
