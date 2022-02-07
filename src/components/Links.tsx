import React from "react";
import EntryRequirement from "./EntryRequire";
import { View } from "react-native";

const Details = () => {
  return (
    <View>
      <EntryRequirement
        headline="Admission Letter From German University"
        description=" You can get the application letter from the university after applying
        via their application portal."
      />
      <EntryRequirement
        headline="Valid Student Visa "
        description=" A valid student visa issued from the governemnt of Germany."
      />
    </View>
  );
};

export default Details;
