import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";

type Topic = {
  headline: string;
};
const Constant: FC<Topic> = ({ headline }) => {
  const tailwind = useTailwind();

  return (
    <View>
      {/* <Text style={tailwind("p-2 text-white font-bold")}>{headline}</Text> */}
      <Text style={styles.textStyle}>{headline} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    padding: 2,
    color: "red",
    fontWeight: "bold",
    margin: 2,
  },
});
export default Constant;
