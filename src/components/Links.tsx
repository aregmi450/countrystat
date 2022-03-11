// overview of the links

import React, { FC } from "react";
import { Linking, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NativeLanguageLink, UsefulLink } from "../../interface";

// code structure for two components useful link and places to study native lagnuage is placed here

const Link: FC<UsefulLink> = ({ url, title }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <Text style={styles.button}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const NativeLanguage: FC<NativeLanguageLink> = ({ url, instituteName }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <Text style={styles.button}>{instituteName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontWeight: "700",
    color: "teal",
    padding: 5,
    margin: 5,
  },
});

export { Link, NativeLanguage };
