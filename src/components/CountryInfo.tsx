// file for design of the home screen of the application

import React, { FC } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import CountryFlag from "react-native-country-flag";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type CountryDetails = {
  name: string;
  isoCode: string;
  countryID: string;
};

const CountryInfo: FC<CountryDetails> = ({ name, isoCode, countryID }) => {
  // const tailwind = useTailwind();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Detail", { countryID, isoCode })}
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
export default CountryInfo;
