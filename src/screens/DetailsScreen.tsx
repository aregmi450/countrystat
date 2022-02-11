import React from "react";
import { Dimensions, StyleSheet, ScrollView, Text } from "react-native";
import CollapseSection from "../components/Collapsible";

const { width, height } = Dimensions.get("screen");

const DetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}> GO ABROAD </Text>
      <CollapseSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: width,
    height: height * 0.8,
    paddingBottom: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
    paddingBottom: 10,
  },
});

export default DetailsScreen;
