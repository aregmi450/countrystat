import React, { FC } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Text, View, StyleSheet } from "react-native";
import CountryFlag from "react-native-country-flag";
import SearchBar from "./SearchBar";
import ChooseCountry from "../components/CountryName";
import CountryDetails from "../components/CountryDetails";

const HomeScreen = () => {
  // const tailwind = useTailwind();
  return (
    <View style={styles.header}>
      <Text style={styles.text}> GO ABROAD </Text>
      <Text style={styles.subText}>
        Choose the country of your dreams here ...
      </Text>
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
