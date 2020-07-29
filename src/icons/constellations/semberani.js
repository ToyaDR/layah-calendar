import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  line: {
    stroke: "black",
    strokeWidth: 3,
  },
}));

const Semberani = () => {
  const classes = useStyles();
  return (
    <svg width="100" height="100">
      <g transform="scale(0.6 0.6)">
        // head
        <circle cx="10" cy="50" r="2" stroke="black" stroke-width="3" />
        <line x1="10" y1="50" x2="30" y2="20" className={classes.line} />
        <circle cx="30" cy="20" r="2" stroke="black" stroke-width="3" />
        <line x1="30" y1="20" x2="60" y2="30" className={classes.line} />
        <circle cx="60" cy="30" r="2" stroke="black" stroke-width="3" />
        <line x1="60" y1="30" x2="50" y2="70" className={classes.line} />
        <circle cx="50" cy="70" r="2" stroke="black" stroke-width="3" />
        // body
        <line x1="50" y1="70" x2="80" y2="69" className={classes.line} />
        <circle cx="80" cy="69" r="2" stroke="black" stroke-width="3" />
        <line x1="80" y1="69" x2="140" y2="75" className={classes.line} />
        <circle cx="140" cy="75" r="2" stroke="black" stroke-width="3" />
        <line x1="140" y1="75" x2="135" y2="110" className={classes.line} />
        <circle cx="135" cy="110" r="2" stroke="black" stroke-width="3" />
        <line x1="135" y1="110" x2="30" y2="120" className={classes.line} />
        <circle cx="30" cy="120" r="2" stroke="black" stroke-width="3" />
        <line x1="30" y1="120" x2="50" y2="70" className={classes.line} />
        // front leg
        <line x1="30" y1="120" x2="33" y2="160" className={classes.line} />
        <circle cx="33" cy="160" r="2" stroke="black" stroke-width="3" />
        // back leg
        <line x1="135" y1="110" x2="142" y2="140" className={classes.line} />
        <circle cx="142" cy="140" r="2" stroke="black" stroke-width="3" />
        // wing
        <line x1="80" y1="69" x2="110" y2="25" className={classes.line} />
        <circle cx="110" cy="25" r="2" stroke="black" stroke-width="3" />
        <line x1="110" y1="25" x2="130" y2="15" className={classes.line} />
        <circle cx="130" cy="15" r="2" stroke="black" stroke-width="3" />
        <line x1="130" y1="15" x2="170" y2="5" className={classes.line} />
        <circle cx="170" cy="5" r="2" stroke="black" stroke-width="3" />
      </g>
    </svg>
  );
};

export default Semberani;
