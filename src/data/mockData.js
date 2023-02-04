import { tokens } from "../theme";



export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    registrarId: 92197,
  },
];



export const mockTransactions = [
  {
    txId: "NSE",
    user: "NIFTY 50",
    date: "2023-02-05",
    cost: "17,854",
  },
  {
    txId: "NSE",
    user: "NIFTY BANK",
    date: "2023-02-05",
    cost: "41,499",
  },
  {
    txId: "NSE",
    user: "SENSEX",
    date: "2023-02-05",
    cost: "60,841",
  },
  {
    txId: "NSE",
    user: "HDFC",
    date: "2023-02-05",
    cost: "2,695",
  },
  {
    txId: "NSE",
    user: "Bajaj Auto",
    date: "2023-02-05",
    cost: "3,852",
  },
  {
    txId: "NSE",
    user: "DLF",
    date: "2023-02-05",
    cost: "353",
  },
  {
    txId: "NSE",
    user: "Dabur",
    date: "2023-02-05",
    cost: "534",
  },
  {
    txId: "NSE",
    user: "Cipla",
    date: "2023-02-05",
    cost: "1,023",
  },
];

export const mockBarData = [
  {
    date: "15",
    "NIFTY50": 137,
    "NIFTY50Color": "hsl(229, 70%, 50%)",
    SENSEX: 96,
    SENSEXColor: "hsl(296, 70%, 50%)",
    NIFTY_Bank: 72,
    NIFTY_BankColor: "hsl(97, 70%, 50%)",
    Bajaj: 140,
    BajajColor: "hsl(340, 70%, 50%)",
  },
  {
    date: "16",
    "NIFTY50": 55,
    "NIFTY50Color": "hsl(307, 70%, 50%)",
    SENSEX: 28,
    SENSEXColor: "hsl(111, 70%, 50%)",
    NIFTY_Bank: 58,
    NIFTY_BankColor: "hsl(273, 70%, 50%)",
    Bajaj: 29,
    BajajColor: "hsl(275, 70%, 50%)",
  },
  {
    date: "17",
    "NIFTY50": 109,
    "NIFT50Color": "hsl(72, 70%, 50%)",
    SENSEX: 23,
    SENSEXColor: "hsl(96, 70%, 50%)",
    NIFTY_Bank: 34,
    NIFTY_BankColor: "hsl(106, 70%, 50%)",
    Bajaj: 152,
    BajajColor: "hsl(256, 70%, 50%)",
  },
  {
    date: "18",
    "NIFTY50": 133,
    "NIFTY50Color": "hsl(257, 70%, 50%)",
    SENSEX: 52,
    SENSEXColor: "hsl(326, 70%, 50%)",
    NIFTY_Bank: 43,
    NIFTY_BankColor: "hsl(110, 70%, 50%)",
    Bajaj: 83,
    BajajColor: "hsl(9, 70%, 50%)",
  },
  {
    date: "19",
    "NIFTY50": 81,
    "NIFTY50Color": "hsl(190, 70%, 50%)",
    SENSEX: 80,
    SENSEXColor: "hsl(325, 70%, 50%)",
    NIFTY_Bank: 112,
    NIFTY_BankColor: "hsl(54, 70%, 50%)",
    Bajaj: 35,
    BajajColor: "hsl(285, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "SENSEX",
    label: "sensex",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "Cipla",
    label: "Cipla",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "Bajaj Auto",
    label: "Bajaj",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "NIFTY Bank",
    label: "Bank",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "NIFTY50",
    label: "50",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "SENSEX",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "15/1/23",
        y: 101,
      },
      {
        x: "16/1/23",
        y: 75,
      },
      {
        x: "17/1/23",
        y: 36,
      },
      {
        x: "18/1/23",
        y: 216,
      },
      {
        x: "19/1/23",
        y: 35,
      },
      {
        x: "20/1/23",
        y: 236,
      },
      {
        x: "21/1/23",
        y: 88,
      },
      {
        x: "22/1/23",
        y: 232,
      },
      {
        x: "23/1/23",
        y: 281,
      },
      {
        x: "24/1/23",
        y: 1,
      },
      {
        x: "25/1/23",
        y: 35,
      },
      {
        x: "26/1/23",
        y: 14,
      },
    ],
  },
  {
    id: "NIFTY-Bank",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "15/1/23",
        y: 212,
      },
      {
        x: "16/1/23",
        y: 190,
      },
      {
        x: "17/1/23",
        y: 270,
      },
      {
        x: "18/1/23",
        y: 9,
      },
      {
        x: "19/1/23",
        y: 75,
      },
      {
        x: "20/1/23",
        y: 175,
      },
      {
        x: "21/1/23",
        y: 33,
      },
      {
        x: "22/1/23",
        y: 189,
      },
      {
        x: "23/1/23",
        y: 97,
      },
      {
        x: "24/1/23",
        y: 87,
      },
      {
        x: "25/1/23",
        y: 299,
      },
      {
        x: "26/1/23",
        y: 251,
      },
    ],
  },
  {
    id: "NIFTY50",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "15/1/23",
        y: 191,
      },
      {
        x: "16/1/23",
        y: 136,
      },
      {
        x: "17/1/23",
        y: 91,
      },
      {
        x: "18/1/23",
        y: 190,
      },
      {
        x: "19/1/23",
        y: 211,
      },
      {
        x: "20/1/23",
        y: 152,
      },
      {
        x: "21/1/23",
        y: 189,
      },
      {
        x: "22/1/23",
        y: 152,
      },
      {
        x: "23/1/23",
        y: 8,
      },
      {
        x: "24/1/23",
        y: 197,
      },
      {
        x: "25/1/23",
        y: 107,
      },
      {
        x: "26/1/23",
        y: 170,
      },
    ],
  },
];
