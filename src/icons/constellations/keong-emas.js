import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  line: {
    stroke: "black",
    strokeWidth: 3,
  },
}));

const KeongEmas = () => {
  const classes = useStyles();
  return (
    <svg width="100" height="100">
      <g transform="scale(0.6 0.6)">
        <circle cx="50" cy="60" r="2" stroke="black" stroke-width="3" />
        <line x1="50" y1="60" x2="40" y2="40" className={classes.line} />
        <circle cx="40" cy="40" r="2" stroke="black" stroke-width="3" />
        <line x1="40" y1="40" x2="70" y2="30" className={classes.line} />
        <circle cx="70" cy="30" r="2" stroke="black" stroke-width="3" />
        <line x1="70" y1="30" x2="80" y2="70" className={classes.line} />
        <circle cx="80" cy="70" r="2" stroke="black" stroke-width="3" />
        <line x1="80" y1="70" x2="10" y2="70" className={classes.line} />
        <circle cx="10" cy="70" r="2" stroke="black" stroke-width="3" />
        <line x1="10" y1="70" x2="30" y2="10" className={classes.line} />
        <circle cx="30" cy="10" r="2" stroke="black" stroke-width="3" />
        <line x1="30" y1="10" x2="100" y2="10" className={classes.line} />
        <circle cx="100" cy="10" r="2" stroke="black" stroke-width="3" />
        <line x1="100" y1="10" x2="90" y2="100" className={classes.line} />
        <circle cx="90" cy="100" r="2" stroke="black" stroke-width="3" />
        <line x1="90" y1="100" x2="60" y2="80" className={classes.line} />
        <circle cx="60" cy="80" r="2" stroke="black" stroke-width="3" />
      </g>
    </svg>
  );
};

export default KeongEmas;
