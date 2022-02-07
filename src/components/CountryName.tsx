import React, { FC } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useTailwind } from "tailwind-rn";
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
        <CountryFlag isoCode={isoCode} size={25} />
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "flex-start",
    padding: 10,
  },
});
export default ChooseCountry;
