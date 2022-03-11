import React from "react";
import { View } from "react-native";
import Details from "./EntryRequirements";
import LinkSection from "./UsefulLink";
import Language from "./Language";
import LanguageLink from "./LanguageLinks";
import CollapseWindow from "./CollapsibleData";
import useGetLinkSection from "../hooks/useGetLinkSections";

const CollapseSection = ({ countryId }: { countryId: string }) => {
  const linkSections = useGetLinkSection(countryId);

  const countrySpecificData = [
    {
      title: "Entry Requirements",
      componentName: <Details entryDetails={[]} />,
    },
    {
      title: "Useful Links for Students",
      componentName: <LinkSection />,
    },
    {
      title: "Language Requirements",
      componentName: <Language languageLinks={[]} />,
    },
    {
      title: "Places to Study Native Language",
      componentName: <LanguageLink nativeLanguageLinks={[]} />,
    },
  ];

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
