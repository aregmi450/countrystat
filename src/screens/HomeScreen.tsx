import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";
import CountryDetails from "../components/CountryDetails";
import Search from "../components/SearchBar";

const HomeScreen = () => {
  // const tailwind = useTailwind();
  return (
    <View style={styles.header}>
      {/* <View style={tailwind("mt-10 p-15")}> */}
      <Text style={styles.text}> GO ABROAD </Text>
      <Text style={styles.subText}>
        Choose the country of your dreams here ...
      </Text>
      <Search />
      <CountryDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    padding: 15,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
  subText: {
    fontSize: 16,
    padding: 5,
    margin: 5,
  },
});

export default HomeScreen;
