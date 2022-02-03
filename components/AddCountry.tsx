import React from "react";
import ChooseCountry from "./CountryName";
import { View } from "react-native";

const AddCountry = () => {
  return (
    <View>
      <ChooseCountry name="Germany" isoCode="de" />
      <ChooseCountry name="USA" isoCode="us" />
      <ChooseCountry name="Canada" isoCode="ca" />
      <ChooseCountry name="Australia" isoCode="au" />
    </View>
  );
};

export default AddCountry;
