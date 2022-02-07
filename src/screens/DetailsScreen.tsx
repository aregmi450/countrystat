import React from "react";
import { View, Button, Linking, Dimensions, StyleSheet } from "react-native";
import Constant from "../components/Constants";
import Language from "../components/Language";
import Details from "../components/Links";

const { width, height } = Dimensions.get("screen");

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Constant headline="Entry Requirements" />
      <Details />

      <Constant headline="Useful Links for Future Students " />
      <Button
        onPress={() =>
          Linking.openURL(
            "https://kathmandu.diplo.de/np-en/service/01-VisaEinreise/-/2225320"
          )
        }
        title="German Embassy for Studying Visa"
        color="teal"
      />

      <Language />
      <Constant headline="Place to study German Language" />

      <Button
        onPress={() => Linking.openURL("https://www.goethe-kathmandu.edu.np/")}
        title="Goethe Institute"
        color="teal"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.5,
  },
});

export default DetailsScreen;
