import React from "react";
import { Text, View, StyleSheet } from "react-native";

const EntryRequirement = () => {
  return (
    <View>
      <Text style={styles.textHeader}>
        Admission Letter From German University
      </Text>
      <Text style={styles.textdescription}>
        You can get the application letter from the university after applying
        via their application portal.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    marginTop: 5,
    padding: 10,
    fontSize: 20,
  },
  textdescription: {
    marginTop: 5,
    padding: 15,
    fontSize: 18,
    color: "black",
  },
});

export default EntryRequirement;
