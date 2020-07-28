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
  Card,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    padding: "48px",
    backgroundColor: "#f5f5f5",
  },
  grid: {
    alignContent: "space-around",
  },
  card: {
    padding: "16px",
  },
  button: {
    backgroundColor: "#6089E3",
    color: "#f5f5f5",
    marginTop: "8px",
  },
}));

export const Calendar = () => {
  const [year, setYear] = useState(currentDate.year);

  const [textFieldYear, setTextFieldYear] = useState(currentDate.year);
  const classes = useStyles(currentDate.year);
  return (
    <Paper className={classes.root}>
      <Grid container spacing={8} direction="column" className={classes.grid}>
        <Grid item>
          <Card className={classes.card}>
            <Grid container spacing={1}>
              <Grid item>
                <TextField
                  label="Year"
                  variant="outlined"
                  value={textFieldYear}
                  type="number"
                  onChange={(event) => setTextFieldYear(event.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={() => setYear(textFieldYear)}
                  className={classes.button}
                >
                  <Typography variant="caption">Submit</Typography>
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item>
          <Year currentYear={year} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Calendar;
