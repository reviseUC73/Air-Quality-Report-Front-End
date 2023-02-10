import React from "react";
import "./Panal.css";
import "./Nav_type.css";
export default function Panel(props) {
  const weather = props.weather || "Status";
  const number = props.number || "--";
  const typeofair = props.TypeOfAir || "Temperature";
  const img_air_url =
    props.img_air ||
    "https://cdn3d.iconscout.com/3d/premium/thumb/raining-at-night-3321909-2775272.png";

  return (
    <div className="container">
      {/* <div className="p_title">Weather</div> */}
      <img className="icon_po" src={img_air_url} alt="1" border="0" />
      <div className="name_po">{weather}</div>
      <div className="number">{number}°C</div>
      <div id="type_measure"> {typeofair} </div>
    </div>
  );
}
