import React from "react";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return;
  }
  return (
    <div>
      <div>
        <h1>Display confirmed</h1>
        <p>Confirmed: {confirmed.value}</p>
        <span>{new Date(lastUpdate).toDateString()}</span>
      </div>
      <div>
        <h1>Display deaths</h1>
        <p>Deaths: {deaths.value}</p>
        <span>{new Date(lastUpdate).toDateString()}</span>
      </div>
      <div>
        <h1>Display recoverd</h1>
        <p>Recoverd: {recovered.value}</p>
        <span>{new Date(lastUpdate).toDateString()}</span>
      </div>
    </div>
  );
};

export default Cards;
