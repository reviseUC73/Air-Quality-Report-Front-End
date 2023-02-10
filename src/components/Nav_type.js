import React, {useState } from "react";

import "./Nav_type.css";

export let air_mode = "temperature";

export default function Nav_type() {
  function tab_F() {
    air_mode = "CO";
    setPoint("animation start-F");
  }
  function tab_M() {
    air_mode = "temperature";
    setPoint("animation start-M");
  }
  function tab_L() {
    air_mode = "humidity";
    // console.log(point);
    setPoint("animation start-L");
  }
  
  
  const [point, setPoint] = useState("animation start-M");
  // useEffect
  return (
    <nav>
      <a herf="/" onClick={tab_F} >
        CO2
      </a>
      <a herf="/" onClick={tab_M}>
        Tempalature
      </a>
      <a herf="/" onClick={tab_L}>
        Humidity
      </a>
      <div className={point}></div>
    </nav>
  );
}
