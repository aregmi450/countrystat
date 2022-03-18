import React, { FC, useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Collapsible from "react-native-collapsible";
import { Entypo } from "@expo/vector-icons";
import { CollapsibleLink } from "../../interface";

const CollapseWindow: FC<CollapsibleLink> = ({ title, componentName }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleExpanded = () => {
    // Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };
  return (
    <TouchableOpacity onPress={toggleExpanded}>
      <Text style={styles.textHeader}>
        {title}
        <Entypo name="chevron-down" size={24} style={styles.icon} />
      </Text>
      <Collapsible collapsed={collapsed} align="top">
        {componentName}
      </Collapsible>
    </TouchableOpacity>
  );
};

export default CollapseWindow;

const styles = StyleSheet.create({
  textHeader: {
    marginTop: 5,
    padding: 5,
    fontSize: 20,
    color: "teal",
    fontWeight: "700",
  },
  textdescription: {
    marginTop: 5,
    padding: 5,
    fontSize: 18,
    color: "black",
  },
  icon: {
    paddingLeft: 20,
    alignItems: "flex-end",
  },
});
