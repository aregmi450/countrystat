// This folder is used to insert the name of the countries to be shown on the home screen

import React from "react";
import CountryInfo from "./CountryInfo";
import { View } from "react-native";
import { countriesData } from "../../const";

const CountryList = () => {
  return (
    <View>
      {countriesData.map(({ countryName, isoCode, countryID }) => (
        <CountryInfo
          key={countryID}
          name={countryName}
          isoCode={isoCode}
          countryID={countryID}
        />
      ))}
    </View>
  );
};

export default CountryList;
