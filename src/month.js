import React from "react";
import {
  Table,
  TableRow,
  TableCell,
  Typography,
  Grid,
  TableHead,
  TableBody,
} from "@material-ui/core";
import WEEKDAYS from "./constants/weekdays";

const Month = ({ month, duration, startingDay }) => {
  const numWeeks = Math.floor(duration / 7) + 1;

  const weeks = new Array(numWeeks).fill(numWeeks).map((n, i) => i);

  return (
    <div>
      <Typography>{month}</Typography>
      <Table>
        <TableHead>
          <TableRow>
            {WEEKDAYS.map((weekday) => (
              <TableCell>
                <Typography>{weekday}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {weeks.map((row) => (
            <TableRow>
              {[1, 2, 3, 4, 5, 6, 7].map((day) => {
                const printedDay = row * 7 - startingDay + day + 1;

                return printedDay > 0 && printedDay <= duration ? (
                  <TableCell>
                    <Typography>{printedDay}</Typography>
                  </TableCell>
                ) : (
                  <TableCell />
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Month;
