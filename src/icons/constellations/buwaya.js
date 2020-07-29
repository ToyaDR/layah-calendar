import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  line: {
    stroke: "black",
    strokeWidth: 3,
  },
}));

const Buwaya = () => {
  const classes = useStyles();
  return (
    <svg width="100" height="100">
      <g transform="scale(0.6 0.6)">
        // mouth
        <circle cx="10" cy="30" r="2" stroke="black" stroke-width="3" />
        <line x1="10" y1="30" x2="50" y2="20" className={classes.line} />
        <circle cx="50" cy="20" r="2" stroke="black" stroke-width="3" />
        <line x1="50" y1="20" x2="90" y2="30" className={classes.line} />
        <circle cx="90" cy="30" r="2" stroke="black" stroke-width="3" />
        <line x1="90" y1="30" x2="95" y2="50" className={classes.line} />
        <circle cx="95" cy="50" r="2" stroke="black" stroke-width="3" />
        <line x1="95" y1="50" x2="20" y2="60" className={classes.line} />
        <circle cx="20" cy="60" r="2" stroke="black" stroke-width="3" />
        // eye
        <circle cx="80" cy="15" r="2" stroke="black" stroke-width="3" />
      </g>
    </svg>
  );
};

export default Buwaya;
