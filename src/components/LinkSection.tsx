import React from "react";
import { View } from "react-native";
import Links from "./Links";

const LinkSection = () => {
  return (
    <View>
      <Links
        url="https://kathmandu.diplo.de/np-en/service/01-VisaEinreise/-/2225320"
        title="German Embassy Nepal"
      />
      <Links
        url="http://noc.moest.gov.np/"
        title="No Objection Certificate Creation"
      />
      <Links
        url="https://www.studying-in-germany.org/scholarships/"
        title="Scholarship Programs in Germany"
      />
      <Links
        url="https://www.studying-in-germany.org/"
        title="Studying in Germany"
      />
    </View>
  );
};

export default LinkSection;
