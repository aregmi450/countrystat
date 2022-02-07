import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const IButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Contact")}
      >
        <Text style={styles.text}>Contact Us </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "teal",
    fontSize: 20,
    alignItems: "center",
    alignContent: "center",
    height: 30,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});

export default IButton;
