import React from "react";
import { EntryRequirement } from "./Requirement";
import { View } from "react-native";
import { EntryDetails } from "../../interface";

interface EntryDetailsProp {
  entryDetails: EntryDetails[];
}

const Details = ({ entryDetails }: EntryDetailsProp) => {
  return (
    <View>
      {entryDetails.map(({ title, description }) => (
        <EntryRequirement key={title} title={title} description={description} />
      ))}
    </View>
  );
};

export default Details;
