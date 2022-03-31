import React, { useEffect, useState } from "react";

export default function () {
  let date = new Date();
  const [hora, setHora] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [segundo, setSegundo] = useState(0);
  useEffect(() => {
    console.log("as");
    setInterval(() => {
      let date = new Date();
      setHora(date.getHours());
      setMinutes(date.getMinutes());
      setSegundo(date.getSeconds());
    }, 1000);
  }, []);
  return (
    <div
      className={`App ${
        minutes === 59
          ? "dia"
          : minutes === 0
          ? "mediodia"
          : minutes === 1
          ? "tarde"
          : minutes === 2
          ? "tarde_noche"
          : "noche"
      }`}
    >
      <h1>{date.toDateString()}</h1>
      <h2>{`${hora}h: ${minutes}m  ${segundo}s`}</h2>
    </div>
  );
}
