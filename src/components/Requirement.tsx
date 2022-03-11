import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { EntryDetails, LanguageDetails } from "../../interface";

const EntryRequirement: FC<EntryDetails> = ({ title, description }) => {
  return (
    <View>
      <Text style={styles.textHeader}>{title}</Text>
      <Text style={styles.textdescription}>{description}</Text>
    </View>
  );
};

const LanguageRequirement: FC<LanguageDetails> = ({
  languagetype,
  languageDescription,
}) => {
  return (
    <View>
      <Text style={styles.textHeader}>{languagetype}</Text>
      <Text style={styles.textdescription}>{languageDescription}</Text>
    </View>
  );
};

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
});

export { EntryRequirement, LanguageRequirement };
