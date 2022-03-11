// esma section one ko data pass vairako cha

import React from "react";
import { EntryRequirement } from "./Requirement";
import { View, Text } from "react-native";
import { countriesData } from "../../const";

const DetailsObj = [
  {
    title: "Admission Letter From University",
    description:
      "You can get the application letter from the university after applying via their application portal.",
  },
  {
    title: "Valid Student Visa and Course Enrollement",
    description:
      "A valid student visa issued from the governemnt of Germany. You should submit a number of documents at the Office of Student Affairs and get your courses registered so you'll be able to attend lectures, exercises, and examinations",
  },
  {
    title: "Health Insurance",
    description:
      "International students must be insuerd in healthcare system while studying in the country. You will need to provide proof of health insurance for your student visa application as well as university enrollment. ",
  },
];

const Details = ({entryDetails}:{entryDetails: any[]}) => {
  return (
    <View>
      {entryDetails.map(({ title, description }) => (
        <EntryRequirement key={title} title={title} description={description} />
      ))}
    </View>
    /* {DetailsObj.map(({ title, description }) => (
        <EntryRequirement key={title} title={title} description={description} />
      ))} */
  );
};

export default Details;
