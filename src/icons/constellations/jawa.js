import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  line: {
    stroke: "black",
    strokeWidth: 3,
  },
}));

const Jawa = () => {
  const classes = useStyles();
  return (
    <svg width="100" height="100">
      <g transform="scale(0.6 0.6)">
        <circle cx="53" cy="3" r="2" stroke="black" stroke-width="3" />
        <line x1="50" y1="0" x2="80" y2="20" className={classes.line} />
        <circle cx="80" cy="20" r="2" stroke="black" stroke-width="3" />
        <line x1="80" y1="20" x2="85" y2="60" className={classes.line} />
        <circle cx="85" cy="60" r="2" stroke="black" stroke-width="3" />
        // Right Wing
        <line x1="85" y1="60" x2="130" y2="40" className={classes.line} />
        <circle cx="130" cy="40" r="2" stroke="black" stroke-width="3" />
        <line x1="130" y1="40" x2="150" y2="50" className={classes.line} />
        <circle cx="150" cy="50" r="2" stroke="black" stroke-width="3" />
        <line x1="150" y1="50" x2="160" y2="60" className={classes.line} />
        <circle cx="160" cy="60" r="2" stroke="black" stroke-width="3" />
        // torso
        <line x1="85" y1="60" x2="83" y2="100" className={classes.line} />
        <circle cx="83" cy="100" r="2" stroke="black" stroke-width="3" />
        <line x1="83" y1="100" x2="75" y2="150" className={classes.line} />
        <circle cx="75" cy="150" r="2" stroke="black" stroke-width="3" />
        // left wing
        <line x1="85" y1="60" x2="35" y2="40" className={classes.line} />
        <circle cx="35" cy="40" r="2" stroke="black" stroke-width="3" />
        <line x1="35" y1="40" x2="10" y2="80" className={classes.line} />
        <circle cx="10" cy="80" r="2" stroke="black" stroke-width="3" />
      </g>
    </svg>
  );
};

export default Jawa;
