import React from "react";
import { View } from "react-native";
import Details from "./BasicRequirements";
import LinkSection from "./LinkSection";
import Language from "./Language";
import LanguageLink from "./LanguageLinks";
import CollapseWindow from "./CollapsibleData";

const CollapseSection = () => {
  return (
    <View>
      <CollapseWindow
        headline="Entry Requirements"
        componentName={<Details />}
      />
      <CollapseWindow
        headline="Useful Links for Students"
        componentName={<LinkSection />}
      />

      <CollapseWindow
        headline="Language Requirements"
        componentName={<Language />}
      />

      <CollapseWindow
        headline="Places to Study Native Language"
        componentName={<LanguageLink />}
      />
    </View>
  );
};

export default CollapseSection;
