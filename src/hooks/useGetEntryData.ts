import { countriesData } from "../../const";

export default function useGetEntryDetails(countryID: string) {
  return countriesData.find(
    ({ countryID: _countryID }) => _countryID === countryID
  );
}
