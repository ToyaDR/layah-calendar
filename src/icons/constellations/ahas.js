import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  line: {
    stroke: "black",
    strokeWidth: 3,
  },
}));

const Ahas = () => {
  const classes = useStyles();
  return (
    <svg width="200" height="100">
      <g transform="scale(0.6 0.6)">
        // snake
        <circle cx="10" cy="20" r="2" stroke="black" stroke-width="3" />
        <line x1="10" y1="20" x2="25" y2="5" className={classes.line} />
        <circle cx="25" cy="5" r="2" stroke="black" stroke-width="3" />
        <line x1="25" y1="5" x2="23" y2="40" className={classes.line} />
        <circle cx="23" cy="40" r="2" stroke="black" stroke-width="3" />
        <line x1="23" y1="40" x2="50" y2="35" className={classes.line} />
        <circle cx="50" cy="35" r="2" stroke="black" stroke-width="3" />
        <line x1="50" y1="35" x2="100" y2="20" className={classes.line} />
        <circle cx="100" cy="20" r="2" stroke="black" stroke-width="3" />
        <line x1="100" y1="20" x2="140" y2="10" className={classes.line} />
        <circle cx="140" cy="10" r="2" stroke="black" stroke-width="3" />
        <line x1="140" y1="10" x2="180" y2="50" className={classes.line} />
        <circle cx="180" cy="50" r="2" stroke="black" stroke-width="3" />
        <line x1="180" y1="50" x2="100" y2="70" className={classes.line} />
        <circle cx="100" cy="70" r="2" stroke="black" stroke-width="3" />
        <line x1="100" y1="70" x2="90" y2="90" className={classes.line} />
        <circle cx="90" cy="90" r="2" stroke="black" stroke-width="3" />
        <line x1="90" y1="90" x2="110" y2="100" className={classes.line} />
        <circle cx="110" cy="100" r="2" stroke="black" stroke-width="3" />
        <line x1="110" y1="100" x2="190" y2="100" className={classes.line} />
        <circle cx="190" cy="100" r="2" stroke="black" stroke-width="3" />
        <line x1="190" y1="100" x2="220" y2="80" className={classes.line} />
        <circle cx="220" cy="80" r="2" stroke="black" stroke-width="3" />
      </g>
    </svg>
  );
};

export default Ahas;
