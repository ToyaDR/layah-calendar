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

export const duration = (month) => (MONTHS.indexOf(month) % 2 === 0 ? 30 : 29); // even numbered months have 30 days, odd have 29
export default MONTHS;
