import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { blue200 } from "react-native-paper/lib/typescript/styles/colors";
import { useTailwind } from "tailwind-rn";

type Topic = {
  headline: string;
};
const Constant: FC<Topic> = ({ headline }) => {
  const tailwind = useTailwind();

  return (
    <View style={styles.border}>
      {/* <Text style={tailwind("p-2 text-white font-bold")}>{headline}</Text> */}
      <Text style={styles.textStyle}>{headline} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderRadius: 5,
    borderColor: "black",
    paddingBottom: 2,
    paddingTop: 2,
  },
  textStyle: {
    padding: 2,
    color: "white",
    fontWeight: "bold",
    margin: 2,
    fontSize: 24,
    backgroundColor: "black",
  },
});
export default Constant;
