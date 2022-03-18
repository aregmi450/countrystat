import { countriesData } from "../../const";

export default function useGetLanguageDetails() {
  const languageType = countriesData.find(
    (countryID) => countryID.languageType
  );
  return languageType;
}
