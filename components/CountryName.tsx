import React, { FC } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { useTailwind } from "tailwind-rn";
import CountryFlag from "react-native-country-flag";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type CountryDetails = {
  name: string;
  isoCode: string;
};

const ChooseCountry: FC<CountryDetails> = ({ name, isoCode }) => {
  const tailwind = useTailwind();
  // const navigation = useNavigation();

  return (
    <NavigationContainer>
      <View style={styles.card}>
        <TouchableOpacity style={styles.card} onPress={() => ""}>
          <CountryFlag isoCode={isoCode} size={25} />
          <Text>{name}</Text>
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "flex-start",
    padding: 10,
  },
});
export default ChooseCountry;
