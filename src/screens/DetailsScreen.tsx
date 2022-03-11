//the second screen of the application where the user gets navigated after clicking on the flag icon at the home page

import React from "react";
import { Dimensions, StyleSheet, ScrollView, Text } from "react-native";
import CollapseSection from "../components/Collapsible";

const { width, height } = Dimensions.get("screen");

function DetailsScreen({ route }: { route: any }) {
  const { countryID } = route.params;

  if (countryID) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}> GO ABROAD </Text>
        <CollapseSection />
      </ScrollView>
    );
  } else {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.error}>
          Sorry, we do not have details for the chosen country.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: width,
    height: height * 0.8,
    paddingBottom: 5,
  },
  error: {
    fontSize: 24,
    fontWeight: "bold",
    color: "teal",
    margin: 10,
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
    paddingBottom: 10,
  },
});

export default DetailsScreen;
