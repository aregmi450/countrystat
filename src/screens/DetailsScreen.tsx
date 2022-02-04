import React, { FC } from "react";
import { Text, View, StyleSheet, Button, Linking } from "react-native";
import Constant from "../components/Constants";
import EntryRequirement from "../components/EntryRequire";

const Details = () => {
  return (
    <View>
      <Constant headline="Entry Requirements" />
      <EntryRequirement />

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
      <Constant headline="Places to Study German Language" />
      <Button
        onPress={() => Linking.openURL("https://www.goethe-kathmandu.edu.np/")}
        title="Goethe Institute"
        color="teal"
      />
    </View>
  );
};

export default Details;
