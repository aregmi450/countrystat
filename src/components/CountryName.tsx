// file for design of the home screen of the application

import React, { FC } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import CountryFlag from "react-native-country-flag";
import { useNavigation } from "@react-navigation/native";

type CountryDetails = {
  name: string;
  isoCode: string;
};

const ChooseCountry: FC<CountryDetails> = ({ name, isoCode }) => {
  // const tailwind = useTailwind();
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Detail")}
      >
        <CountryFlag isoCode={isoCode} size={30} />
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "flex-start",
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "teal",
    paddingTop: 5,
  },
});
export default ChooseCountry;
