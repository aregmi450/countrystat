export interface Data {
  countryID: string;
  isoCode: string;
  countryName: string;
  entryDetails: EntryDetails[];
  usefulLink: UsefulLink[];
  languageType: LanguageType[];
  nativeLanguageLink: NativeLanguageLink[];
}

export interface EntryDetails {
  title: string;
  description: string;
}

export interface UsefulLink {
  url: string;
  title: string;
}

export interface LanguageType {
  languagetype: string;
  languageDescription: string;
}

export interface NativeLanguageLink {
  url: string;
  instituteName: string;
}
