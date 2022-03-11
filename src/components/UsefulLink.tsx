//necessary links for student are placed here

import React from "react";
import { View } from "react-native";
import { countriesData } from "../../const";
import { Link } from "./Links";

// this contains all the render process for all the necessary links to the student

const LinkSection = ({}) => {
  return (
    <View>
      {countriesData.usefulLink.map(({ url, title }) => {
        return <Link key={title} title={title} url={url} />;
      })}
    </View>
  );
};

export default LinkSection;

// const LinkSection = () => {
//   return (
//     <View>
//       <Link
//         url="https=//kathmandu.diplo.de/np-en/service/01-VisaEinreise/-/2225320"
//         instituteName="German Embassy Nepal"
//       />
//       <Link
//         url="http=//noc.moest.gov.np/"
//         instituteName="No Objection Certificate Creation"
//       />
//       <Link
//         url="https=//www.studying-in-germany.org/scholarships/"
//         instituteName="Studying in Germany "
//       />
//       <Link
//         url="https=//www.studying-in-germany.org/"
//         instituteName="Studying in Germany"
//       />
//     </View>
//   );
// };
