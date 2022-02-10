import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Collapsible from "react-native-collapsible";
import Details from "./BasicRequirements";
import LinkSection from "./LinkSection";
import Constant from "./Constants";
import Language from "./Language";
import LanguageLink from "./LanguageLinks";
import CollapseWindow from "./CollapsibleData";

const CollapseSection = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleExpanded = () => {
    // Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  return (
    <View>
      {/* <TouchableOpacity onPress={toggleExpanded}>
        <Constant headline="Entry Requirements" />
        <Collapsible collapsed={collapsed} align="top">
          <Details />
        </Collapsible>
      </TouchableOpacity> */}

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

      {/* <TouchableOpacity onPress={toggleExpanded}>
        <Constant headline="Useful Links for Future Students " />
        <Collapsible collapsed={collapsed} align="top">
          <LinkSection />
        </Collapsible>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleExpanded}>
        <Constant headline="Language Requirements" />
        <Collapsible collapsed={collapsed} align="top">
          <Language />
        </Collapsible>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleExpanded}>
        <Constant headline="Places to Study Native Language" />
        <Collapsible collapsed={collapsed} align="top">
          <LanguageLink />
        </Collapsible>
      </TouchableOpacity> */}
    </View>
  );
};

export default CollapseSection;
