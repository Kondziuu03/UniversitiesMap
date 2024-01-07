export enum UniversityType {
  Uniwersytet = "Uniwersytet",
  Politechnika = "Politechnika",
  Wojskowa = "Wojskowa",
  Medyczna = "Medyczna",
  Ekonomiczna = "Ekonomiczna",
}

export interface University {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  websiteUrl: string;
  email: string;
  phoneNumber: string;
  address: {
    city: string;
    street: string;
    postalCode: string;
  };
  type: UniversityType;
}

const universities: University[] = [
  {
    name: "University of Warsaw",
    description: "University of Warsaw is the best university in Poland.",
    latitude: 52.24047766795632,
    longitude: 21.018590468622,
    websiteUrl: "https://www.uw.edu.pl/",
    email: "rekrutacja@adm.uw.edu.pl",
    phoneNumber: "225520000",
    address: {
      city: "Warsaw",
      street: "Krakowskie Przedmieście 26/28",
      postalCode: "00-927",
    },
    type: UniversityType.Uniwersytet,
  },
  {
    name: "Warsaw University of Technology",
    description:
      "Warsaw University of Technology is the best university in Poland.",
    latitude: 52.22137198811688,
    longitude: 21.00812860011893,
    websiteUrl: "https://www.pw.edu.pl/",
    email: "rekrutacja.bps@pw.edu.pl",
    phoneNumber: "222347211",
    address: {
      city: "Warsaw",
      street: "Plac Politechniki 1",
      postalCode: "00-661",
    },
    type: UniversityType.Politechnika,
  },
  {
    name: "Military University of Technology",
    description:
      "Military University of Technology is the best university in Poland.",
    latitude: 52.25322607941918,
    longitude: 20.900236868050246,
    websiteUrl: "https://www.wojsko-polskie.pl/wat/",
    email: "rekrutacja@wat.edu.pl",
    phoneNumber: "261839000",
    address: {
      city: "Warsaw",
      street: "Kaliskiego 2",
      postalCode: "00-908",
    },
    type: UniversityType.Wojskowa,
  },
  {
    name: "Medical University of Warsaw",
    description:
      "Medical University of Warsaw is the best university in Poland.",
    latitude: 52.20778083938358,
    longitude: 20.983520337367093,
    websiteUrl: "https://www.wum.edu.pl/",
    email: "rekrutacja@wum.edu.pl",
    phoneNumber: "225720913",
    address: {
      city: "Warsaw",
      street: "Żwirki i Wigury 61",
      postalCode: "02-091",
    },
    type: UniversityType.Medyczna,
  },
  {
    name: "Warsaw School of Economics",
    description: "Warsaw School of Economics is the best university in Poland.",
    latitude: 52.209088584231424,
    longitude: 21.008854914642352,
    websiteUrl: "https://www.sgh.waw.pl/",
    email: "rekrutacja@sgh.waw.pl",
    phoneNumber: "225646000",
    address: {
      city: "Warsaw",
      street: "Al. Niepodległości 162",
      postalCode: "02-554",
    },
    type: UniversityType.Ekonomiczna,
  },
  {
    name: "Politechnika Gdańska",
    description:
      "Technology university campus, founded in 1904, with 9 faculties & scientific research programs.",
    latitude: 54.37220362394118,
    longitude: 18.61640456252711,
    websiteUrl: "https://pg.edu.pl/",
    email: "rekrutacja@pg.edu.pl",
    phoneNumber: "583471100",
    address: {
      city: "Gdańsk",
      street: "Narutowicza 11/12",
      postalCode: "80-233",
    },
    type: UniversityType.Politechnika,
  },
  {
    name: "Politechnika Lubelska",
    description: "Politechnika Lubelska is the best university in Poland.",
    latitude: 51.23529848471934,
    longitude: 22.548877070995022,
    websiteUrl: "https://www.pollub.pl/",
    email: "rekrutacja@pollub.pl",
    phoneNumber: "815384140",
    address: {
      city: "Lublin",
      street: "Nadbystrzycka 38A",
      postalCode: "20-618",
    },
    type: UniversityType.Politechnika,
  },
];

export default universities;
