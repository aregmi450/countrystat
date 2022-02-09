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
        headline="Valid Student Visa and Course Enrollement"
        description=" A valid student visa issued from the governemnt of Germany. You should submit a number of documents at the Office of Student Affairs and get your courses registered so you'll be able to attend lectures, exercises, and examinations."
      />
      <EntryRequirement
        headline="Health Insurance"
        description=" International students must be insuerd in healthcare system while studying in Germany. You will need to provide proof of health insurance for your student visa application as well as university enrolment. "
      />
    </View>
  );
};

export default Details;
