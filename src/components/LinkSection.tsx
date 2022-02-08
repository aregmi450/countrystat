import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Links from "./Links";

const LinkSection = () => {
  return (
    <ScrollView>
      <Links
        url="https://kathmandu.diplo.de/np-en/service/01-VisaEinreise/-/2225320"
        title="German Embassy Nepal"
      />
      <Links
        url="https://www.studying-in-germany.org/scholarships/"
        title="Scholarship Programs in Germany"
      />
      <Links
        url="https://www.studying-in-germany.org/"
        title="Studying in Germany"
      />
    </ScrollView>
  );
};

export default LinkSection;
