import React from "react";

export const Greeting = (props) => {
  const currTime = new Date();

  const time = currTime.getHours();
  let greeting;

  const morning = time >= 4 && time <= 10;
  const afternoon = time >= 11 && time <= 16;
  const evening = time >= 17 && time <= 23;
  const night = time >= 1 && time <= 3;

  const morningGreeting = "Good morning";
  const afternoonGreeting = "Good afternoon";
  const eveningGreeting = "Good evening";
  const nightGreeting = "Good night";

  switch (true) {
    case morning:
      greeting = morningGreeting;
      break;
    case afternoon:
      greeting = afternoonGreeting;
      break;
    case evening:
      greeting = eveningGreeting;
      break;
    case night:
      greeting = nightGreeting;
      break;
    default:
      greeting = "";
  }

  return <div className="greeting">{greeting}</div>;
};

export default Greeting;
