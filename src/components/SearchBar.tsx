//searchbar to search

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

export type query = string;
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        autoComplete={false}
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
