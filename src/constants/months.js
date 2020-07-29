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
import { Typography, Grid } from "@material-ui/core";

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
  Iraloa: (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="caption">Kinara,</Typography>
        <br />
        <Typography variant="caption">the Swan Woman</Typography>
      </Grid>
      <Grid item>
        <Kinara />
      </Grid>
    </Grid>
  ),
  "Ma'alin": (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="caption">Adarna, the Crow</Typography>
      </Grid>
      <Grid item>
        <Adarna />
      </Grid>
    </Grid>
  ),
  "Liha'moui": (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="caption">Semberani, the Pegasus</Typography>
      </Grid>
      <Grid item>
        <Semberani />
      </Grid>
    </Grid>
  ),
  Tanoa: (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="caption">Camakau,</Typography>
        <br />
        <Typography variant="caption">the Wanderer's Boat</Typography>
      </Grid>
      <Grid item>
        <Camakau />
      </Grid>
    </Grid>
  ),
  Ulang: (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="caption">Ahas (ng Langit),</Typography>
        <br />
        <Typography variant="caption">the Sky Serpent</Typography>
      </Grid>
      <Grid item>
        <Ahas />
      </Grid>
    </Grid>
  ),
  "Ki'afu": (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="caption">Kembar, the Twin Birds</Typography>
        <br />
        <Typography variant="caption">Geroda and Jentayu</Typography>
      </Grid>
      <Grid item>
        <Kembar />
      </Grid>
    </Grid>
  ),
  Inabuwan: (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="caption">Keong Emas,</Typography>
        <br />
        <Typography variant="caption">the Snail Princess</Typography>
      </Grid>
      <Grid item>
        <KeongEmas />
      </Grid>
    </Grid>
  ),
  "O'oluso": (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="caption">Buwaya,</Typography>
        <br />
        <Typography variant="caption">the Crocodile Demon</Typography>
      </Grid>
      <Grid item>
        <Buwaya />
      </Grid>
    </Grid>
  ),
  "Vai'lenga": (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="caption">Erawan,</Typography>
        <br />
        <Typography variant="caption">the White Elephant</Typography>
      </Grid>
      <Grid item>
        <Erawan />
      </Grid>
    </Grid>
  ),
  Kavay: (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="caption">Aotea</Typography>
        <br />
        <Typography variant="caption">the Glowing Cloud</Typography>
      </Grid>
      <Grid item>
        <Aotea />
      </Grid>
    </Grid>
  ),
  "Mana'mui": (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="caption">Hantu Belangkas,</Typography>
        <br />
        <Typography variant="caption">the King Crab</Typography>
      </Grid>
      <Grid item>
        <HantuBelangkas />
      </Grid>
    </Grid>
  ),
  Uluaman: (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="caption">Jawa, the Dragon</Typography>
      </Grid>
      <Grid item>
        <Jawa />
      </Grid>
    </Grid>
  ),
};

export const duration = (month) => (MONTHS.indexOf(month) % 2 === 0 ? 30 : 29); // even numbered months have 30 days, odd have 29
export default MONTHS;
