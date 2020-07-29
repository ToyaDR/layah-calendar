import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  line: {
    stroke: "black",
    strokeWidth: 3,
  },
}));

const Erawan = () => {
  const classes = useStyles();
  return (
    <svg width="100" height="100">
      <g transform="scale(0.6 0.6)">
        // trunk
        <circle cx="60" cy="40" r="2" stroke="black" stroke-width="3" />
        <line x1="60" y1="40" x2="50" y2="20" className={classes.line} />
        <circle cx="50" cy="20" r="2" stroke="black" stroke-width="3" />
        <line x1="50" y1="20" x2="20" y2="30" className={classes.line} />
        <circle cx="20" cy="30" r="2" stroke="black" stroke-width="3" />
        <line x1="20" y1="30" x2="40" y2="70" className={classes.line} />
        <circle cx="40" cy="70" r="2" stroke="black" stroke-width="3" />
        // head
        <line x1="40" y1="70" x2="75" y2="60" className={classes.line} />
        <circle cx="75" cy="60" r="2" stroke="black" stroke-width="3" />
        <line x1="75" y1="60" x2="74" y2="80" className={classes.line} />
        <circle cx="74" cy="80" r="2" stroke="black" stroke-width="3" />
        // body
        <line x1="74" y1="80" x2="120" y2="75" className={classes.line} />
        <circle cx="120" cy="75" r="2" stroke="black" stroke-width="3" />
        <line x1="120" y1="75" x2="120" y2="120" className={classes.line} />
        <circle cx="120" cy="120" r="2" stroke="black" stroke-width="3" />
        <line x1="120" y1="120" x2="41" y2="110" className={classes.line} />
        <circle cx="41" cy="110" r="2" stroke="black" stroke-width="3" />
        <line x1="41" y1="110" x2="40" y2="70" className={classes.line} />
        // leg
        <line x1="41" y1="110" x2="44" y2="130" className={classes.line} />
        <circle cx="44" cy="130" r="2" stroke="black" stroke-width="3" />
      </g>
    </svg>
  );
};

export default Erawan;
