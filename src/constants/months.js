import React from "react";
import Kinara from "./../icons/constellations/kinara";
import Adarna from "./../icons/constellations/adarna";
import Semberani from "../icons/constellations/semberani";
import Camakau from "../icons/constellations/camakau";
import Ahas from "./../icons/constellations/ahas";
import Kembar from "./../icons/constellations/kembar";
import KeongEmas from "../icons/constellations/keong-emas";
import Buwaya from "./../icons/constellations/buwaya";
import Erawan from "./../icons/constellations/erawan";
import Aotea from "./../icons/constellations/aotea";
import HantuBelangkas from "./../icons/constellations/hantu-belangkas";
import Jawa from "./../icons/constellations/jawa";

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

export const MONTHS_TO_CONSTELLATIONS = {
  Iraloa: <Kinara />,
  "Ma'alin": <Adarna />,
  "Liha'moui": <Semberani />,
  Tanoa: <Camakau />,
  Ulang: <Ahas />,
  "Ki'afu": <Kembar />,
  Inabuwan: <KeongEmas />,
  "O'oluso": <Buwaya />,
  "Vai'lenga": <Erawan />,
  Kavay: <Aotea />,
  "Mana'mui": <HantuBelangkas />,
  Uluaman: <Jawa />,
};

export const duration = (month) => (MONTHS.indexOf(month) % 2 === 0 ? 30 : 29); // even numbered months have 30 days, odd have 29
export default MONTHS;
