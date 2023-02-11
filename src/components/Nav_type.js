import React, { useState } from "react";

import "./Nav_type.css";

// export let air_mode = "temperature";
// air_mode(probs)
// props.setAir_mode("CO")
export default function Nav_type(props) {
  function tab_F() {
    // props.this_mode = "CO";
    props.setThis_mode("co");
    setPoint("animation start-F");
    const { auto_meanal, auto_run } = props.state
    props.setState({
      // ...auto_meanal,
      auto_run: {
        ...auto_run,
        current: auto_run.co
      }
    })
  }
  function tab_M() {
    props.setThis_mode("temperature");
    setPoint("animation start-M");
    const { auto_meanal, auto_run } = props.state
    console.log(props.state)
    props.setState({
      // ...auto_meanal,
      auto_run: {
        ...auto_run,
        current: auto_run.temperature
      }
    })
  }
  function tab_L() {
    props.setThis_mode("humidity");
    // console.log(point);
    setPoint("animation start-L");
    const { auto_meanal, auto_run } = props.state
    props.setState({
      // ...auto_meanal,
      auto_run: {
        ...auto_run,
        current: auto_run.humidity
      }
    })
  }

  const [point, setPoint] = useState("animation start-M");
  // useEffect
  return (
    <nav>
      <a herf="/" onClick={tab_F}>
        CO
      </a>
      <a herf="/" onClick={tab_M}>
        Temperature
      </a>
      <a herf="/" onClick={tab_L}>
        Humidity
      </a>
      <div className={point}></div>
    </nav>
  );
}
