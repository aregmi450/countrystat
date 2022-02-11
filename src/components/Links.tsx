import React, { FC } from "react";
import { Linking, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Links = {
  url: string;
  title: string;
};

const Links: FC<Links> = ({ url, title }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <Text style={styles.button}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontWeight: "700",
    color: "teal",
    padding: 3,
    margin: 5,
  },
});

export default Links;
