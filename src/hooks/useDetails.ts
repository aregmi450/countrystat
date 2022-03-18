import { countriesData } from "../../const";

export default function useGetDetails(countryID: string) {
  return countriesData.find(
    ({ countryID: _countryID }) => _countryID === countryID
  );
}
