import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

type CountryRequirements = {
  headline: string;
  description: string;
};

const EntryRequirement: FC<CountryRequirements> = ({
  headline,
  description,
}) => {
  return (
    <View>
      <Text style={styles.textHeader}>{headline}</Text>
      <Text style={styles.textdescription}>{description}</Text>
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

export default EntryRequirement;
