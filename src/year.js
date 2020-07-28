import React from "react";
import MONTHS, { duration } from "./constants/months";
import Month from "./month";
import { Grid } from "@material-ui/core";

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
    <Grid container direction="column" spacing={5}>
      {processMonths(MONTHS, annualStartingDay).map(
        ({ month, startingDay, duration }) => (
          <Month
            month={month}
            startingDay={startingDay}
            duration={duration}
            year={currentYear}
          />
        )
      )}
    </Grid>
  );
};

export default Year;
