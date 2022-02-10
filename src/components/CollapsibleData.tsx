import React, { FC, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Collapsible from "react-native-collapsible";
import Constant from "./Constants";

type CollapsibleComponents = {
  componentName: React.ReactNode;
  headline: string;
};

const CollapseWindow: FC<CollapsibleComponents> = ({
  componentName,
  headline,
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleExpanded = () => {
    // Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };
  return (
    <TouchableOpacity onPress={toggleExpanded}>
      <Constant headline={headline} />
      <Collapsible collapsed={collapsed} align="top">
        {componentName}
      </Collapsible>
    </TouchableOpacity>
  );
};
export default CollapseWindow;
