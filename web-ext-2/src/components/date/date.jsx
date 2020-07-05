import React from "react";
import { format } from "date-fns";

export const DateDisplay = (props) => {
  const currDate = new Date();
  let date;

  if (props.dateFormat === "verbose") {
    date = format(currDate, "PPPP");
    //use string functions to remove extra commas if needed
  } else {
    date = format(currDate, "MM/dd/yyyy");
  }

  return <div className="date">{date}</div>; // Look at html outline for best parent tag
};

export default DateDisplay;
