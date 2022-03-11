// language needed for the country are described here

import React from "react";
import { View } from "react-native";
import { countriesData } from "../../const";
import { LanguageRequirement } from "./Requirement";

const Language = ({}) => {
  return (
    <View>
      {countriesData.languageType.map(
        ({ languagetype, languageDescrpition }) => {
          return (
            <LanguageRequirement
              key={languagetype}
              languagetype={languagetype}
              languageDescription={languageDescrpition}
            />
          );
        }
      )}
    </View>
  );
};

export default Language;

// const LanguageObj = [
//   {
//     languagetype: "Native Language",
//     descrpition:
//       "You need to complete two levels of German language which you can do after reaching the destination too.",
//   },
//   {
//     languagetype: "English Language",
//     descrpition:
//       "The IELTS or TOFEL requirements are posted on the college/universities websites. If you are going for Undergrad it might not be needed.",
//   },
// ];
