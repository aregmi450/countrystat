//home screen of the application which is shown when the application first loads

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";
import CountryDetails from "../components/CountryDetails";
import Search from "../components/SearchBar";

const HomeScreen = () => {
  return (
    <View style={styles.header}>
      {/* <View style={tailwind("m-50 p-15")}> */}
      <Text style={styles.text}> GO ABROAD </Text>
      <Text style={styles.subText}>
        Choose the country of your dreams here ...
      </Text>

      <Search />
        {
            /**
             * FIXME If country lists is supposed to be rendered then similar naming convention should be made
             * It could be <CountryList/>
             */
        }
      <CountryDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
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
