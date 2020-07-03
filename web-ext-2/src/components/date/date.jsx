import React from "react";
import { format } from "date-fns";

export const DateDisplay = (props) => {
  const currDate = new Date();
  let date;

  if (props.DateFormat === "verbose") {
    date = format(currDate, "PPPP");
  } else {
    date = format(currDate, "MM/dd/yyyy");
  }

  return <div className="Date">{date}</div>; // Look at html outline for best parent tag
};

export default DateDisplay;
