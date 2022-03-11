import React from "react";
import { View } from "react-native";
import Details from "./EntryRequirements";
import LinkSection from "./UsefulLink";
import Language from "./Language";
import LanguageLink from "./LanguageLinks";
import CollapseWindow from "./CollapsibleData";

const countrySpecificData = [
  {
    title: "Entry Requirements",
    componentName: <Details />,
  },
  {
    title: "Useful Links for Students",
    componentName: <LinkSection />,
  },
  {
    title: "Language Requirements",
    componentName: <Language />,
  },
  {
    title: "Places to Study Native Language",
    componentName: <LanguageLink nativeLanguageLinks={[]} />,
  },
];

const CollapseSection = ({}) => {
  return (
    <View>
      {countrySpecificData.map(({ title, componentName }) => (
        <CollapseWindow
          key={title}
          componentName={componentName}
          title={title}
        />
      ))}
    </View>
  );
};

export default CollapseSection;
