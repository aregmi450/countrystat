import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CountryDetails from "./src/components/CountryDetails";
import { EntryRequirement } from "./src/components/Requirement";
import DetailsScreen from "./src/screens/DetailsScreen";

export type CreateStackParams = {
  Details: Icode;
};

export interface Icode {
  isoCode: string;
}
// move the stack
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"Detail"} component={DetailsScreen} />
      <Stack.Screen name={"Country"} component={CountryDetails} />
      <Stack.Screen name={"Entry"} component={EntryRequirement} />
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
