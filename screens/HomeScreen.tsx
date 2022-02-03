import React, { FC } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Text, View, StyleSheet } from "react-native";
import CountryFlag from "react-native-country-flag";
import SearchBar from "./SearchBar";
import ChooseCountry from "../components/CountryName";
import AddCountry from "../components/AddCountry";

const HomeScreen = () => {
  // const tailwind = useTailwind();
  return (
    <View style={styles.header}>
      <Text style={styles.text}> GO ABROAD </Text>
      <Text>Choose the country of your dreams here ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    padding: 25,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
});

export default HomeScreen;
