import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  line: {
    stroke: "black",
    strokeWidth: 3,
  },
}));

const Adarna = () => {
  const classes = useStyles();
  return (
    <svg width="100" height="100">
      <g transform="scale(0.6 0.6)">
        <circle cx="50" cy="5" r="2" stroke="black" stroke-width="3" />
        <line x1="50" y1="5" x2="55" y2="80" className={classes.line} />
        <circle cx="55" cy="80" r="2" stroke="black" stroke-width="3" />
        <line x1="55" y1="80" x2="120" y2="79" className={classes.line} />
        <circle cx="120" cy="79" r="2" stroke="black" stroke-width="3" />
        <line x1="120" y1="79" x2="118" y2="30" className={classes.line} />
        <circle cx="118" cy="30" r="2" stroke="black" stroke-width="3" />
        <line x1="118" y1="30" x2="70" y2="15" className={classes.line} />
        <circle cx="70" cy="15" r="2" stroke="black" stroke-width="3" />
        <line x1="70" y1="15" x2="50" y2="5" className={classes.line} />
        //head
        <line x1="50" y1="5" x2="80" y2="5" className={classes.line} />
        <circle cx="80" cy="5" r="2" stroke="black" stroke-width="3" />
        <line x1="80" y1="5" x2="70" y2="15" className={classes.line} />
      </g>
    </svg>
  );
};

export default Adarna;
