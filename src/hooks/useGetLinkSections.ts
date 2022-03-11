import {countriesData} from "../../const";

export default function useGetLinkSection(countryId: string){
    return countriesData.find(country=>country.countryID === countryId)?.nativeLanguageLink

}
