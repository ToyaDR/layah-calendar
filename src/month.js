import React from "react";
import {
  Typography,
  makeStyles,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import WEEKDAYS from "./constants/weekdays";
import currentDate from "./constants/currentDate";
import DryIcon from "./icons/dry-icon";
import {
  MONTHS_TO_SEASONS,
  MONTHS_TO_CONSTELLATIONS,
} from "./constants/months";
import WetIcon from "./icons/wet-icon";

const useStyles = makeStyles(() => ({
  card: {
    padding: "16px",
    margin: "16px",
  },
  cell: {
    width: "80px",
  },
  currentDay: {
    backgroundColor: "#B6FFD7",
  },
}));
const Month = ({ month, duration, startingDay, year }) => {
  const numWeeks = Math.floor(duration / 7) + 1;

  const weeks = new Array(numWeeks).fill(numWeeks).map((n, i) => i);

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container direction="column" spacing={5}>
          <Grid item>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h5">{month}</Typography>
              </Grid>
              <Grid item>{MONTHS_TO_CONSTELLATIONS[month]}</Grid>
              <Grid item>
                {MONTHS_TO_SEASONS[month] === "dry" ? <DryIcon /> : <WetIcon />}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={8}>
              {WEEKDAYS.map((weekday) => (
                <Grid item className={classes.cell}>
                  <Grid container spacing={2}>
                    <Typography variant="caption">{weekday}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {weeks.map((row) => (
            <Grid item>
              <Grid container spacing={8}>
                {new Array(7)
                  .fill(7)
                  .map((n, i) => i + 1)
                  .map((day) => {
                    const printedDay = row * 7 - startingDay + day + 1;

                    if (
                      currentDate.day === printedDay &&
                      currentDate.month === month &&
                      currentDate.year === year
                    ) {
                      return (
                        <Grid item className={classes.cell}>
                          <Grid
                            container
                            spacing={2}
                            className={classes.currentDay}
                          >
                            <Typography variant="caption">
                              {printedDay}
                            </Typography>
                          </Grid>
                        </Grid>
                      );
                    }
                    return printedDay > 0 && printedDay <= duration ? (
                      <Grid item className={classes.cell}>
                        <Grid container spacing={2}>
                          <Typography variant="caption">
                            {printedDay}
                          </Typography>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid item className={classes.cell}>
                        <Grid container spacing={2}>
                          <Typography />
                        </Grid>
                      </Grid>
                    );
                  })}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Month;
