import React from "react";
import { View, Button, Linking, Dimensions, StyleSheet } from "react-native";
import Constant from "../components/Constants";
import EntryRequirement from "../components/EntryRequire";
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
      <Constant headline="Language Requirements" />

      <EntryRequirement
        headline="Native Language"
        description="You need to complete two levels of German language which you can do after reaching the destination too."
      />
      <EntryRequirement
        headline="English Language"
        description="The IELTS or TOFEL requirements are posted on the college/universities websites. IF you are going for Undergrad it might not be needed."
      />

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
