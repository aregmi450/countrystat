import React, { FC } from "react";
import { Linking, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Links = {
  url: string;
  title: string;
};

const Links: FC<Links> = ({ url, title }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => Linking.openURL(url)}>
        <Text style={styles.button}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontWeight: "700",
    color: "teal",
    padding: 2,
    margin: 5,
  },
});

// export default Links;

// export  LinkSection;

export default Links;

/* //   <Button
        onPress={() =>
          Linking.openURL(
            "https://kathmandu.diplo.de/np-en/service/01-VisaEinreise/-/2225320"
          )
        }
        title="German Embassy for Studying Visa"
        color="teal"
      /> */
// }
