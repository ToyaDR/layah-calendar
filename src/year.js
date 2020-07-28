import React from "react";
import MONTHS, { duration } from "./constants/months";
import Month from "./month";
import { Typography, Grid } from "@material-ui/core";

// const processMonths2 = (months, annualStartingDay) =>
//   months.map((month, idx) => {
//     const floorDivTwo = Math.floor(idx / 2);
//     const daysPassed =
//       idx % 2 === 0
//         ? (floorDivTwo + 1) * 30 + floorDivTwo * 29
//         : floorDivTwo * 30 + (floorDivTwo + 1) * 29;
//     const startingDay =
//       idx === 0 ? annualStartingDay : (daysPassed + annualStartingDay) % 7;

//     return {
//       month,
//       startingDay,
//       duration: duration(month),
//     };
//   });
const processMonths = (months, annualStartingDay) =>
  months.reduce((acc, month, idx) => {
    let startingDay = annualStartingDay;
    if (idx > 0) {
      const prevMonth = acc[idx - 1];
      startingDay = (prevMonth.startingDay + prevMonth.duration) % 7;
    }

    acc.push({
      month,
      startingDay,
      duration: duration(month),
    });
    return acc;
  }, []);

const Year = ({ currentYear }) => {
  const annualStartingDay = (currentYear * 354 + 1) % 7;

  return (
    <Grid container direction="column" spacing={4}>
      <Typography>{currentYear}</Typography>
      {processMonths(MONTHS, annualStartingDay).map(
        ({ month, startingDay, duration }) => (
          <Grid item>
            <Month
              month={month}
              startingDay={startingDay}
              duration={duration}
            />
          </Grid>
        )
      )}
    </Grid>
  );
};

export default Year;
