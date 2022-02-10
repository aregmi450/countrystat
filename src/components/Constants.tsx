import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";

type Topic = {
  headline: string;
};
const Constant: FC<Topic> = ({ headline }) => {
  // const tailwind = useTailwind();

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
    color: "black",
    fontWeight: "bold",
    margin: 2,
    fontSize: 18,
    textAlign: "left",
    backgroundColor: "lightseagreen",
  },
});
export default Constant;
