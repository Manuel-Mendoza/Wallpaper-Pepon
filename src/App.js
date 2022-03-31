import React, { useEffect, useState } from "react";
import "./App.css";
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
      className="App"
      style={{
        background: minutes === 4 ? "#000" : "#159",
        transition: "all 2s",
      }}
    >
      <h1>{date.toDateString()}</h1>
      <h2>{`${hora}h: ${minutes}m  ${segundo}s`}</h2>
    </div>
  );
}
