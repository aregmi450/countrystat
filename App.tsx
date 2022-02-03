import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddCountry from "./components/AddCountry";
import ChooseCountry from "./components/CountryName";
import Details from "./screens/DetailsScreen";
import Hello from "./screens/HomeScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Hello />
      <Details />
      <AddCountry />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
