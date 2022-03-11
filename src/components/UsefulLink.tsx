//necessary links for student are placed here

import React from "react";
import { View } from "react-native";
import { UsefulLink } from "../../interface";
import { Link } from "./Links";

// this contains all the render process for all the necessary links to the student
interface UsefulLinkProps {
  usefulLinks: UsefulLink[];
}

const UsefulLink = ({ usefulLinks }: UsefulLinkProps) => {
  return (
    <View>
      {usefulLinks.map(({ url, title }) => {
        return <Link key={title} title={title} url={url} />;
      })}
    </View>
  );
};

export default UsefulLink;
