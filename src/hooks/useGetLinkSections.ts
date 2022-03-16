import { countriesData } from "../../const";

export default function useGetLinkSection(countryID: string) {
  return countriesData.find((countryID) => countryID.nativeLanguageLink);
}
