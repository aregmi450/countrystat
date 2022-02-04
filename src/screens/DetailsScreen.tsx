import React from "react";
import { View, Button, Linking } from "react-native";
import Constant from "../components/Constants";
import Details from "../components/Links";

const DetailsScreen = () => {
  return (
    <View>
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
      <Constant headline="Places to Study German Language" />
      <Button
        onPress={() => Linking.openURL("https://www.goethe-kathmandu.edu.np/")}
        title="Goethe Institute"
        color="teal"
      />
    </View>
  );
};

export default DetailsScreen;
