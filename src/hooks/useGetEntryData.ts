import { countriesData } from "../../const";

export default function useGetEntryDetails() {
  return countriesData.find((countryID) => countryID?.entryDetails);
}
