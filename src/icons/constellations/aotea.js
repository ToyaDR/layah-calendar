import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  line: {
    stroke: "black",
    strokeWidth: 3,
  },
}));

const Aotea = () => {
  const classes = useStyles();
  return (
    <svg width="100" height="120">
      <g
        transform="rotate(95, 50, 50)
                    scale(0.3 0.3)"
      >
        //cloud
        <path
          id="svg_1"
          d="m135.5,211.45313c-27,-9 -26,-44 26,-53c52,-9 -4,-33.90626 72.5,-83.45313c76.5,-49.54687 90.5,7.45313 81.5,34.45313c-9,27 -13,35 10,38c23,3 60,51 35,63c-25,12 -41,13 -51,25c-10,12 -14,30 -31,36c-17,6 -24,-16 -34,-28c-10,-12 -20,4 -50,38c-30,34 -70,-27 -60,-67"
          fill-opacity="null"
          stroke-opacity="null"
          stroke-width="3"
          stroke="#000"
          fill="#fff"
          className={classes.line}
        />
      </g>
    </svg>
  );
};

export default Aotea;
