// This folder is used to insert the name of the countries to be shown on the home screen

import React from "react";
import ChooseCountry from "./CountryName";
import { View } from "react-native";

const CountryDetails = () => {
  return (
    <View>
      <ChooseCountry name="Germany" isoCode="de" />
      <ChooseCountry name="USA" isoCode="us" />
      <ChooseCountry name="Canada" isoCode="ca" />
      <ChooseCountry name="Australia" isoCode="au" />
    </View>
  );
};

export default CountryDetails;
