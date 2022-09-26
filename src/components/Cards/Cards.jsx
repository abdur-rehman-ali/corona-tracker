import React from "react";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return;
  }
  return (
    <div>
      <div>
        <h1>Display confirmed</h1>
        <CountUp
          start={0}
          end={confirmed.value}
          duration={0.75}
          separator=","
        />
        <h4>{new Date(lastUpdate).toDateString()}</h4>
      </div>
      <div>
        <h1>Display deaths</h1>
        <CountUp start={0} end={deaths.value} duration={0.75} separator="," />
        <h4>{new Date(lastUpdate).toDateString()}</h4>
      </div>
      <div>
        <h1>Display recoverd</h1>
        <CountUp
          start={0}
          end={recovered.value}
          duration={0.75}
          separator=","
        />
        <h4>{new Date(lastUpdate).toDateString()}</h4>
      </div>
    </div>
  );
};

export default Cards;
