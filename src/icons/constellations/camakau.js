import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  line: {
    stroke: "black",
    strokeWidth: 3,
  },
}));

const Camakau = () => {
  const classes = useStyles();
  return (
    <svg width="100" height="100">
      <g transform="scale(0.6 0.6)">
        // boat
        <circle cx="10" cy="50" r="2" stroke="black" stroke-width="3" />
        <line x1="10" y1="50" x2="30" y2="5" className={classes.line} />
        <circle cx="30" cy="5" r="2" stroke="black" stroke-width="3" />
        <line x1="30" y1="5" x2="90" y2="50" className={classes.line} />
        <circle cx="90" cy="50" r="2" stroke="black" stroke-width="3" />
        <line x1="90" y1="50" x2="89" y2="110" className={classes.line} />
        <circle cx="89" cy="110" r="2" stroke="black" stroke-width="3" />
        <line x1="89" y1="110" x2="65" y2="150" className={classes.line} />
        <circle cx="65" cy="150" r="2" stroke="black" stroke-width="3" />
        <line x1="65" y1="150" x2="13" y2="80" className={classes.line} />
        <circle cx="13" cy="80" r="2" stroke="black" stroke-width="3" />
        <line x1="13" y1="80" x2="10" y2="50" className={classes.line} />
        // outrigger top bar
        <line x1="90" y1="50" x2="130" y2="40" className={classes.line} />
        <circle cx="130" cy="40" r="2" stroke="black" stroke-width="3" />
        // outrigger bottom bar
        <line x1="89" y1="110" x2="132" y2="130" className={classes.line} />
        <circle cx="132" cy="130" r="2" stroke="black" stroke-width="3" />
        // outrigger
        <line x1="125" y1="10" x2="130" y2="40" className={classes.line} />
        <circle cx="125" cy="10" r="2" stroke="black" stroke-width="3" />
        <line x1="130" y1="40" x2="132" y2="130" className={classes.line} />
        <line x1="132" y1="130" x2="127" y2="160" className={classes.line} />
        <circle cx="127" cy="160" r="2" stroke="black" stroke-width="3" />
      </g>
    </svg>
  );
};

export default Camakau;
