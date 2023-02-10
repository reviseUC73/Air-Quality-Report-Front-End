import React from "react";
import "./Panal.css";
export default function Panel(props) {
  const weather = props.weather || "default";
  const number = props.number || "--";
  const typeofair = props.TypeOfAir || "Type of Air";

  return (
    <div>
      <div className="container">
        {/* <div className="p_title">Weather</div> */}
        <img
          class="icon_po"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/raining-at-night-3321909-2775272.png"
          alt="1"
          border="0"
        />
        <div className="name_po">{weather}</div>
        <div className="number">{number}°C</div>
        <div id="type_measure"> {typeofair} </div>
      </div>
    </div>
  );
}
