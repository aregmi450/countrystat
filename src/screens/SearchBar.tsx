import React, { useState } from "react";
import View from "react-native";
import { Searchbar } from "react-native-paper";

export type query = string;
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search your dream destination"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default Search;
