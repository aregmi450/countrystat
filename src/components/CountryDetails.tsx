// This folder is used to insert the name of the countries to be shown on the home screen

import React from "react";
import ChooseCountry from "./CountryName";
import { View } from "react-native";
import { countriesData } from "../../const";

// const countriesObj = [
//   {
//     name: "Germany",
//     isoCode: "de",
//     countryID: "de",
//   },
//   {
//     name: "USA",
//     isoCode: "us",
//     countryID: "us",
//   },
//   {
//     name: "Canada",
//     isoCode: "ca",
//     countryID: "cb",
//   },
//   {
//     name: "Australia",
//     isoCode: "au",
//     countryID: "au",
//   },
// ];

const CountryDetails = () => {
  return (
    <View>
      {countriesData.map(({ countryName, isoCode, countryID }) => (
        <ChooseCountry
          key={countryID}
          name={countryName}
          isoCode={isoCode}
          countryID={countryID}
        />
      ))}
    </View>
  );
};

export default CountryDetails;
