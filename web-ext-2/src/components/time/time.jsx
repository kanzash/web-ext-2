import React from "react";
import { format } from "date-fns";

export const Time = (props) => {
  const currDate = new Date();
  let time;

  if (props.TimeFormat === 12) {
    time = format(currDate, "hh:mm aa");
  } else {
    time = format(currDate, "HH:mm");
  }
  //let time;

  if (props.TimeFormat === 12) {
    // time = date-fn 12 hour
  } else {
    // time = date-fn 24hr
  }

  return <div className="Time">{time}</div>;
};

export default Time;
