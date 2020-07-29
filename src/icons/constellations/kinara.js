import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  line: {
    stroke: "black",
    strokeWidth: 3,
  },
}));

const Kinara = () => {
  const classes = useStyles();
  return (
    <svg width="100" height="100">
      <g transform="scale(0.5 0.5)">
        // head
        <circle cx="65" cy="40" r="2" stroke="black" strokeWidth="3" />
        <line x1="65" y1="40" x2="40" y2="50" className={classes.line} />
        <circle cx="40" cy="50" r="2" stroke="black" strokeWidth="3" />
        <line x1="40" y1="50" x2="15" y2="25" className={classes.line} />
        <circle cx="15" cy="25" r="2" stroke="black" strokeWidth="3" />
        <line x1="15" y1="25" x2="50" y2="5" className={classes.line} />
        <circle cx="50" cy="5" r="2" stroke="black" strokeWidth="3" />
        <line x1="50" y1="5" x2="100" y2="40" className={classes.line} />
        <circle cx="100" cy="40" r="2" stroke="black" strokeWidth="3" />
        // neck
        <line x1="50" y1="5" x2="100" y2="40" className={classes.line} />
        <circle cx="100" cy="40" r="2" stroke="black" strokeWidth="3" />
        <line x1="100" y1="40" x2="30" y2="100" className={classes.line} />
        <circle cx="30" cy="100" r="2" stroke="black" strokeWidth="3" />
        // wing
        <line x1="30" y1="100" x2="160" y2="70" className={classes.line} />
        <circle cx="160" cy="70" r="2" stroke="black" strokeWidth="3" />
        <line x1="160" y1="70" x2="180" y2="110" className={classes.line} />
        <circle cx="180" cy="110" r="2" stroke="black" strokeWidth="3" />
        // body
        <line x1="30" y1="100" x2="23" y2="150" className={classes.line} />
        <circle cx="23" cy="150" r="2" stroke="black" strokeWidth="3" />
        <line x1="23" y1="150" x2="73" y2="170" className={classes.line} />
        <circle cx="73" cy="170" r="2" stroke="black" strokeWidth="3" />
        <line x1="73" y1="170" x2="123" y2="150" className={classes.line} />
        <circle cx="123" cy="150" r="2" stroke="black" strokeWidth="3" />
      </g>
    </svg>
  );
};

export default Kinara;
