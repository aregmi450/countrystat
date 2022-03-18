import { countriesData } from "../../const";

export default function useGetLanguageDetails() {
  return countriesData.find((countryID) => countryID.languageType);
}
