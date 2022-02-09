import React, { FC } from "react";
import { View } from "react-native";
import Constant from "./Constants";
import EntryRequirement from "./EntryRequire";

const Language = () => {
  return (
    <View>
      <EntryRequirement
        headline="Native Language"
        description="You need to complete two levels of German language which you can do after reaching the destination too."
      />
      <EntryRequirement
        headline="English Language"
        description="The IELTS or TOFEL requirements are posted on the college/universities websites. If you are going for Undergrad it might not be needed."
      />
    </View>
  );
};

export default Language;
