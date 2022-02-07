import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CountryDetails from "./src/components/CountryDetails";
import EntryRequirement from "./src/components/EntryRequire";
import DetailsScreen from "./src/screens/DetailsScreen";
import ContactScreen from "./src/screens/ContactScreen";
// move the stack
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"Detail"} component={DetailsScreen} />
      <Stack.Screen name={"Country"} component={CountryDetails} />
      <Stack.Screen name={"Entry"} component={EntryRequirement} />
      <Stack.Screen name={"Contact"} component={ContactScreen} />
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
