import React from "react";

export const Time = () => {
  const currTime = new Date();
  var time =
    currTime.getHours() +
    ":" +
    currTime.getMinutes() +
    ":" +
    currTime.getSeconds();

  return <div className="Time">{time}</div>;
};

export default Time;
