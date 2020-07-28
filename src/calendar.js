import React, { useState } from "react";
import Year from "./year";
import currentDate from "./constants/currentDate";
import {
  TextField,
  Grid,
  Paper,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    padding: "48px",
    backgroundColor: "#f5f5f5",
  },
  grid: {
    alignContent: "space-around",
  },
}));
export const Calendar = () => {
  const [year, setYear] = useState(currentDate.year);

  const [textFieldYear, setTextFieldYear] = useState(currentDate.year);
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={8} direction="column" className={classes.grid}>
        <Grid item>
          <TextField
            label="Year"
            defaultValue={currentDate.year}
            variant="outlined"
            value={textFieldYear}
            onChange={(event) => setTextFieldYear(event.target.value)}
          />
          <Button variant="contained" onClick={() => setYear(textFieldYear)}>
            <Typography>Calculate</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Year currentYear={year} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Calendar;
