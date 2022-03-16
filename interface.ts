export interface Data {
  countryID: string;
  isoCode: string;
  countryName: string;
  entryDetails: EntryDetails[];
  usefulLink: UsefulLink[];
  languageType: LanguageDetails[];
  nativeLanguageLink: NativeLanguageLink[];
}

export interface CountryDetails {
  name: string;
  isoCode: string;
  countryID: string;
}

export interface EntryDetails {
  title: string;
  description: string;
}

export interface UsefulLink {
  url: string;
  title: string;
}

export interface LanguageDetails {
  languagetype: string;
  languageDescription: string;
}

export interface NativeLanguageLink {
  url: string;
  instituteName: string;
}
