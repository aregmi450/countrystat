import { countriesData } from "../../const";

export default function useNativeLanguageLink() {
  return countriesData.find((countryID) => countryID.nativeLanguageLink);
}
