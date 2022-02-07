import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { black } from "react-native-paper/lib/typescript/styles/colors";

export type query = string;
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search your dream destination"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  searchBar: {
    borderRadius: 5,
    borderColor: "black",
  },
});

export default Search;