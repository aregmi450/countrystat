import React from "react";
import { View } from "react-native";
import Details from "./EntryRequirements";
import LinkSection from "./UsefulLink";
import Language from "./Language";
import LanguageLink from "./LanguageLinks";
import CollapseWindow from "./CollapsibleRequirements";
import useGetLinkSection from "../hooks/useGetLinkSections";
import useGetEntryDetails from "../hooks/useGetEntryData";
import { EntryDetails, UsefulLink } from "../../interface";

//this component shows the detailed information about the section pressed by the user

const DetailedInformation = ({ countryID }: { countryID: string }) => {
  const country = useGetEntryDetails(countryID);
  const countrySpecificData = [
    {
      title: "Entry Requirements",
      componentName: <Details entryDetails={country?.entryDetails ?? []} />,
    },
    {
      title: "Useful Links for Students",
      componentName: <LinkSection usefulLinks={country?.usefulLink ?? []} />,
    },
    {
      title: "Language Requirements",
      componentName: <Language languageLinks={country?.languageType ?? []} />,
    },
    {
      title: "Places to Study Native Language",
      componentName: (
        <LanguageLink nativeLanguageLinks={country?.nativeLanguageLink ?? []} />
      ),
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

export default DetailedInformation;
