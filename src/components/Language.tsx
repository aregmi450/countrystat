// language needed for the country are described here

import React from "react";
import { View } from "react-native";
import { LanguageDetails } from "../../interface";
import { LanguageRequirement } from "./Requirement";

interface LanguageProps {
  languageLinks: LanguageDetails[];
}

const Language = ({ languageLinks }: LanguageProps) => {
  return (
    <View>
      {languageLinks.map(({ languagetype, languageDescription }) => {
        return (
          <LanguageRequirement
            key={languagetype}
            languagetype={languagetype}
            languageDescription={languageDescription}
          />
        );
      })}
    </View>
  );
};

export default Language;
