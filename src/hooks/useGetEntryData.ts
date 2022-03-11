import { countriesData } from "../../const";

export default function useGetEntryDetails() {
  return countriesData.find((entryDetails) => entryDetails);
}
