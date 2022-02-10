import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Entypo } from "@expo/vector-icons";

type Topic = {
  headline: string;
};
const Constant: FC<Topic> = ({ headline }) => {
  // const tailwind = useTailwind();

  return (
    <View style={styles.border}>
      {/* <Text style={tailwind("p-2 text-white font-bold")}>{headline}</Text> */}

      <Text style={styles.textStyle}>
        {headline}
        <Entypo
          name="chevron-down"
          size={24}
          color="black"
          style={styles.icon}
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderRadius: 5,
    borderColor: "black",
    paddingBottom: 5,
    paddingTop: 5,
    marginStart: 5,
  },
  textStyle: {
    padding: 2,
    color: "black",
    fontWeight: "bold",
    margin: 5,
    fontSize: 18,
    backgroundColor: "lightseagreen",
  },
  icon: {
    alignSelf: "flex-end",
  },
});
export default Constant;
