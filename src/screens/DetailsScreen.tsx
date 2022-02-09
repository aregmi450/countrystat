import React from "react";
import {
  View,
  Button,
  Linking,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import Constant from "../components/Constants";
import Language from "../components/Language";
import Details from "../components/BasicRequirements";
import LinkSection from "../components/LinkSection";
import Links from "../components/Links";
import { TouchableOpacity } from "react-native-gesture-handler";
import CollapseSection from "../components/Collapsible";

const { width, height } = Dimensions.get("screen");

const DetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CollapseSection />

      {/* 
      <Constant headline="Entry Requirements" />
      <Details />
      <Constant headline="Useful Links for Future Students " />
      <LinkSection /> */}
      {/* <Button
        onPress={() =>
          Linking.openURL(
            "https://kathmandu.diplo.de/np-en/service/01-VisaEinreise/-/2225320"
          )
        }
        title="German Embassy for Studying Visa"
        color="teal"
      /> */}

      {/* <Language /> */}

      {/* <Links
        url="https://www.goethe-kathmandu.edu.np/"
        title="Goethe Institute"
      /> */}

      {/* <Button
        onPress={() => Linking.openURL("https://www.goethe-kathmandu.edu.np/")}
        title="Goethe Institute"
        color="teal"
      /> */}

      {/* <Links
        url="https://www.edupark.com.np/german-language-courses"
        title="EduPark Nepal"
      /> */}
      {/* <Button
        onPress={() =>
          Linking.openURL("https://www.edupark.com.np/german-language-courses")
        }
        title="EduPark Nepal"
        color="teal"
      /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.8,
    paddingBottom: 5,
  },
});

export default DetailsScreen;
