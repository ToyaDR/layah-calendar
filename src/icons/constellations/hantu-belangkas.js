import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  line: {
    stroke: "black",
    strokeWidth: 3,
  },
}));

const HantuBelangkas = () => {
  const classes = useStyles();
  return (
    <svg width="100" height="100">
      <g transform="scale(0.6 0.6)">
        // body
        <circle cx="50" cy="50" r="2" stroke="black" stroke-width="3" />
        <line x1="50" y1="50" x2="80" y2="30" className={classes.line} />
        <circle cx="80" cy="30" r="2" stroke="black" stroke-width="3" />
        <line x1="80" y1="30" x2="110" y2="55" className={classes.line} />
        <circle cx="110" cy="55" r="2" stroke="black" stroke-width="3" />
        <line x1="110" y1="55" x2="105" y2="70" className={classes.line} />
        <circle cx="105" cy="70" r="2" stroke="black" stroke-width="3" />
        <line x1="105" y1="70" x2="95" y2="80" className={classes.line} />
        <circle cx="95" cy="80" r="2" stroke="black" stroke-width="3" />
        <line x1="95" y1="80" x2="70" y2="82" className={classes.line} />
        <circle cx="70" cy="82" r="2" stroke="black" stroke-width="3" />
        <line x1="70" y1="82" x2="60" y2="73" className={classes.line} />
        <circle cx="60" cy="73" r="2" stroke="black" stroke-width="3" />
        <line x1="60" y1="73" x2="50" y2="50" className={classes.line} />
        // legs // top left
        <circle cx="50" cy="10" r="2" stroke="black" stroke-width="3" />
        <line x1="50" y1="10" x2="30" y2="40" className={classes.line} />
        <circle cx="30" cy="40" r="2" stroke="black" stroke-width="3" />
        <line x1="30" y1="40" x2="50" y2="50" className={classes.line} />
        // top right
        <circle cx="120" cy="5" r="2" stroke="black" stroke-width="3" />
        <line x1="120" y1="5" x2="120" y2="40" className={classes.line} />
        <circle cx="120" cy="40" r="2" stroke="black" stroke-width="3" />
        <line x1="120" y1="40" x2="110" y2="55" className={classes.line} />
        // middle left
        <circle cx="40" cy="70" r="2" stroke="black" stroke-width="3" />
        <line x1="40" y1="70" x2="60" y2="73" className={classes.line} />
        // middle right
        <circle cx="130" cy="65" r="2" stroke="black" stroke-width="3" />
        <line x1="130" y1="65" x2="105" y2="70" className={classes.line} />
        // bottom left
        <circle cx="50" cy="90" r="2" stroke="black" stroke-width="3" />
        <line x1="50" y1="90" x2="70" y2="82" className={classes.line} />
        // bottom right
        <circle cx="105" cy="90" r="2" stroke="black" stroke-width="3" />
        <line x1="105" y1="90" x2="95" y2="80" className={classes.line} />
      </g>
    </svg>
  );
};

export default HantuBelangkas;
