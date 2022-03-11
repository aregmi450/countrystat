import "./interface";
import { Data } from "./interface";
export const countriesData: Data[] = [
  {
    countryID: "fr",
    countryName: "France",
    isoCode: "fr",
    entryDetails: [
      {
        title: "Admission Letter From University",
        description:
          "You can get the application letter from the university after applying via their application portal.",
      },
      {
        title: "Valid Student Visa and Course Enrollement",
        description:
          "A valid student visa issued from the governemnt of France. You should submit a number of documents at the Office of Student Affairs and get your courses registered so you'll be able to attend lectures, exercises, and examinations",
      },
    ],
    usefulLink: [
      {
        url: "https://np.ambafrance.org/-English-",
        title: "French Embassy Nepal",
      },
      {
        url: "https://france-visas.gouv.fr/web/france-visas/",
        title: "Visa Website for France",
      },
    ],

    languageType: [
      {
        languagetype: "Native Language",
        languageDescription:
          "French language is the native language. You can learn it at various places around Kathmandu or especially at Alliance de Francaise.",
      },
      {
        languagetype: "English Language",
        languageDescription:
          "English language is enough as this is the native language. You can learn any other language like Spanish, Chinese according to the place you are going for study",
      },
    ],
    nativeLanguageLink: [
      {
        url: "https://www.duolingo.com/",
        instituteName: "Duolingo",
      },
      {
        url: "https://www.alliancefrancaise.org.np/",
        instituteName: "Alliance Francaise",
      },
    ],
  },
  {
    countryID: "de",
    isoCode: "de",
    countryName: "Germany",
    entryDetails: [
      {
        title: "Admission Letter From University",
        description:
          "You can get the application letter from the university after applying via their application portal.",
      },
      {
        title: "Valid Student Visa and Course Enrollement",
        description:
          "A valid student visa issued from the governemnt of Germnay. You should submit a number of documents at the Office of Student Affairs and get your courses registered so you'll be able to attend lectures, exercises, and examinations",
      },
    ],
    languageType: [
      {
        languagetype: "Native Language",
        languageDescription:
          "You need to complete two levels of German language which you can do after reaching the destination too.",
      },
      {
        languagetype: "English Language",
        languageDescription:
          "The IELTS or TOFEL requirements are posted on the college/universities websites. If you are going for undergraduate it might not be needed.",
      },
    ],
    nativeLanguageLink: [
      {
        url: "https://www.duolingo.com/",
        instituteName: "Duolingo",
      },
      {
        url: "https://www.goethe-kathmandu.edu.np/",
        instituteName: "Goethe Institute",
      },
      {
        url: "https://www.edupark.com.np/german-language-courses",
        instituteName: "EduPark Nepal",
      },
    ],
    usefulLink: [
      {
        url: "https://np.ambafrance.org/-English-",
        title: "French Embassy Nepal",
      },
    ],
  },
];

//   countryDetails: [
//     {
//       countryID: "de",
//       isoCode: "de",
//       countryName: "Germany",
//     },
//   ],

//       entryDetails: [
//         {
//           title: "Admission Letter From University",
//           description:
//             "You can get the application letter from the university after applying via their application portal.",
//         },
//         {
//           title: "Valid Student Visa and Course Enrollement",
//           description:
//             "A valid student visa issued from the governemnt of Germany. You should submit a number of documents at the Office of Student Affairs and get your courses registered so you'll be able to attend lectures, exercises, and examinations",
//         },
//         {
//           title: "Health Insurance",
//           description:
//             "International students must be insuerd in healthcare system while studying in the country. You will need to provide proof of health insurance for your student visa application as well as university enrollment. ",
//         },
//       ],
//       usefulLink: [
//         {
//           url: "https://kathmandu.diplo.de/np-en/service/01-VisaEinreise/-/2225320",
//           title: "German Embassy Nepal",
//         },
//         {
//           url: "http://noc.moest.gov.np/",
//           title: "No Objection Certificate Creation",
//         },
//         {
//           url: "https://www.studying-in-germany.org/scholarships/",
//           title: "Scholarship Programs in Germany",
//         },
//         {
//           url: "https://www.studying-in-germany.org/",
//           title: "Studying in Germany",
//         },
//       ],
//       languageType: [
//         {
//           languagetype: "Native Language",
//           languageDescrpition:
//             "You need to complete two levels of German language which you can do after reaching the destination too.",
//         },
//         {
//           languagetype: "English Language",
//           languageDescrpition:
//             "The IELTS or TOFEL requirements are posted on the college/universities websites. If you are going for Undergrad it might not be needed.",
//         },
//       ],
//       nativeLanguageLink: [
//         {
//           url: "https://www.goethe-kathmandu.edu.np/",
//           title: "Goethe Institute",
//         },
//         {
//           url: "https://www.edupark.com.np/german-language-courses",
//           title: "EduPark Nepal",
//         },
//         { url: "https://www.duolingo.com/", title: "Duolingo" },
//       ],
//     },

//     // second country
//     {
//       countryID: "us",
//       isoCode: "us",
//       countryName: "United States",
//       entryDetails: [
//         {
//           title: "Admission Letter From University",
//           description:
//             "You can get the application letter from the university after applying via their application portal.",
//         },
//         {
//           title: "Valid Student Visa and Course Enrollement",
//           description:
//             "A valid student visa issued from the United States Government. You need to apply for F1 Visa at the US embassy. You need to have an i20 from the institution you are going to attend the degree of your choice while applying for the student visa.",
//         },
//       ],
//       usefulLink: [
//         {
//           url: "https://np.usembassy.gov/",
//           title: "US Embassy Nepal",
//         },
//         {
//           url: "http://noc.moest.gov.np/",
//           title: "No Objection Certificate Creation",
//         },
//         {
//           url: "https://www.ets.org/gre/revised_general/register/",
//           title: "GRE Test Registration",
//         },
//         {
//           url: "https://usefnepal.org/",
//           title: "USEF Nepal",
//         },
//       ],
//       languageType: [
//         {
//           languagetype: "Native Language",
//           descrpition:
//             "English language is enough as this is the native language. You can learn any other language like Spanish, Chinese according to the place you are going for study.",
//         },
//         {
//           languagetype: "English Language",
//           descrpition:
//             "The IELTS or TOFEL requirements are posted on the college/universities websites. Also other methods of verification of English language proficiency is provided in the respective institiution's website.",
//         },
//       ],
//     },
//   ],
// };
// };
