const MONTHS = [
  "Iraloa",
  "Ma'alin",
  "Liha'moui",
  "Tanoa",
  "Ulang",
  "Ki'afu",
  "Inabuwan",
  "O'oluso",
  "Vai'lenga",
  "Kavay",
  "Mana'mui",
  "Uluaman",
];

export const MONTHS_TO_SEASONS = {
  Iraloa: "dry",
  "Ma'alin": "dry",
  "Liha'moui": "dry",
  Tanoa: "dry",
  Ulang: "wet",
  "Ki'afu": "wet",
  Inabuwan: "wet",
  "O'oluso": "wet",
  "Vai'lenga": "wet",
  Kavay: "wet",
  "Mana'mui": "wet",
  Uluaman: "wet",
};

export const duration = (month) => (MONTHS.indexOf(month) % 2 === 0 ? 30 : 29); // even numbered months have 30 days, odd have 29
export default MONTHS;
