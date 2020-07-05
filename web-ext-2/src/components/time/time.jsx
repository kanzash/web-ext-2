import React from "react";
import { format } from "date-fns";

export const Time = (props) => {
  const currDate = new Date();
  let time;

  if (props.timeFormat === 12) {
    time = format(currDate, "hh:mm aa");
    //separete am/pm from the string
  } else {
    time = format(currDate, "HH:mm");
  }

  return <div className="time">{time}</div>;
};

export default Time;
