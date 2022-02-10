import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Collapsible from "react-native-collapsible";
import Details from "./BasicRequirements";
import LinkSection from "./LinkSection";
import Constant from "./Constants";
import Language from "./Language";
import LanguageLink from "./LanguageLinks";

const CollapseSection = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleExpanded = () => {
    // Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleExpanded}>
        <Constant headline="Entry Requirements" />
      </TouchableOpacity>
      <Collapsible collapsed={collapsed} align="top">
        <Details />
      </Collapsible>

      <TouchableOpacity onPress={toggleExpanded}>
        <Constant headline="Useful Links for Future Students " />
      </TouchableOpacity>
      <Collapsible collapsed={collapsed} align="top">
        <LinkSection />
      </Collapsible>

      <TouchableOpacity onPress={toggleExpanded}>
        <Constant headline="Language Requirements" />
      </TouchableOpacity>
      <Collapsible collapsed={collapsed} align="top">
        <Language />
      </Collapsible>

      <TouchableOpacity onPress={toggleExpanded}>
        <Constant headline="Places to Study Native Language" />
      </TouchableOpacity>
      <Collapsible collapsed={collapsed} align="top">
        <LanguageLink />
      </Collapsible>
    </View>
  );
};

export default CollapseSection;
