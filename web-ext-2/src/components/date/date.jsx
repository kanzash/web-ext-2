import React from "react";

export const DateDisplay = () => {
  const currDate = new Date();
  var date =
    currDate.getDate() +
    "/" +
    currDate.getMonth() +
    "/" +
    currDate.getFullYear();

  return <div className="Date">{date}</div>;
};

export default DateDisplay;
