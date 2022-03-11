//links to the native language section are placed here

import React from "react";
import { View } from "react-native";
import { NativeLanguageLink } from "../../interface";
import { NativeLanguage } from "./Links";

interface LanguageLinkProps {
  nativeLanguageLinks: NativeLanguageLink[];
}
const LanguageLink = ({ nativeLanguageLinks }: LanguageLinkProps) => {
  return (
    <View>
      {nativeLanguageLinks.map(({ url, instituteName }) => {
        return (
          <NativeLanguage
            key={instituteName}
            instituteName={instituteName}
            url={url}
          />
        );
      })}
    </View>
  );
};

export default LanguageLink;
