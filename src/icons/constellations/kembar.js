import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  line: {
    stroke: "black",
    strokeWidth: 3,
  },
}));

const Kembar = () => {
  const classes = useStyles();
  return (
    <svg width="100" height="100">
      <g transform="scale(0.6 0.6)">
        // left bird // wing
        <circle cx="10" cy="30" r="2" stroke="black" stroke-width="3" />
        <line x1="10" y1="30" x2="25" y2="15" className={classes.line} />
        <circle cx="25" cy="15" r="2" stroke="black" stroke-width="3" />
        <line x1="25" y1="15" x2="50" y2="40" className={classes.line} />
        <circle cx="50" cy="40" r="2" stroke="black" stroke-width="3" />
        // head
        <line x1="50" y1="40" x2="80" y2="20" className={classes.line} />
        <circle cx="80" cy="20" r="2" stroke="black" stroke-width="3" />
        <line x1="80" y1="20" x2="100" y2="30" className={classes.line} />
        <circle cx="100" cy="30" r="2" stroke="black" stroke-width="3" />
        // body
        <line x1="50" y1="40" x2="60" y2="80" className={classes.line} />
        <circle cx="60" cy="80" r="2" stroke="black" stroke-width="3" />
        <line x1="60" y1="80" x2="70" y2="100" className={classes.line} />
        <circle cx="70" cy="100" r="2" stroke="black" stroke-width="3" />
        // right bird // body
        <circle cx="100" cy="5" r="2" stroke="black" stroke-width="3" />
        <line x1="100" y1="5" x2="120" y2="15" className={classes.line} />
        <circle cx="120" cy="15" r="2" stroke="black" stroke-width="3" />
        <line x1="120" y1="15" x2="150" y2="70" className={classes.line} />
        <circle cx="150" cy="70" r="2" stroke="black" stroke-width="3" />
        // head
        <line x1="150" y1="70" x2="125" y2="90" className={classes.line} />
        <circle cx="125" cy="90" r="2" stroke="black" stroke-width="3" />
        <line x1="125" y1="90" x2="110" y2="80" className={classes.line} />
        <circle cx="110" cy="80" r="2" stroke="black" stroke-width="3" />
        // wing
        <line x1="150" y1="70" x2="170" y2="110" className={classes.line} />
        <circle cx="170" cy="110" r="2" stroke="black" stroke-width="3" />
        <line x1="170" y1="110" x2="190" y2="110" className={classes.line} />
        <circle cx="190" cy="110" r="2" stroke="black" stroke-width="3" />
        <line x1="190" y1="110" x2="200" y2="70" className={classes.line} />
        <circle cx="200" cy="70" r="2" stroke="black" stroke-width="3" />
      </g>
    </svg>
  );
};

export default Kembar;
