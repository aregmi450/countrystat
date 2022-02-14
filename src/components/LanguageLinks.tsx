import React from "react";
import { View } from "react-native";
import Links from "./Links";

const LanguageLink = () => {
  return (
    <View>
      <Links
        url="https://www.goethe-kathmandu.edu.np/"
        title="Goethe Institute"
      />
      <Links
        url="https://www.edupark.com.np/german-language-courses"
        title="EduPark Nepal"
      />
      <Links url="https://www.duolingo.com/" title="Duolingo" />
    </View>
  );
};

export default LanguageLink;
