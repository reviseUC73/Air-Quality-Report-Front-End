import "../App.css";
import Panel from "../components/Panel";
import axios from "axios";
import { GetData_LED, GetData_recent, PostData_LED } from "../services/ser";
import { useEffect, useState } from "react";
import Nav_type from "../components/Nav_type";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
// import { Link } from "react-router-dom";

// import {Link, useNavigate} from 'react-router-dom';

function Main_page({color_mode, HandleChange_color_mode}) {
  const [this_mode, setThismode] = useState("temperature");
  const [state, setState] = React.useState({
    auto_run: {
      current: false,
      co: true,
      humidity: true,
      temperature: true,
    },
  });

  const DataLED = async () => {
    try {
      const var_led_data = await GetData_LED();
    } catch (e) {
      console.log(e);
    }
  };

  const [data_r, setData] = useState([]);
  const DataRecent = async () => {
    try {
      const var_data = await GetData_recent();
      // console.log('DataRecent called')
      console.log(data_r);
      setData(var_data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    DataLED();
    DataRecent();
    console.log("state called");
    const intervalId = setInterval(() => DataRecent(), 5000);
    return () => clearInterval(intervalId);
  }, [state]);

  useEffect(() => {
    axios
      .get("https://airquality.zeqa.net/air_quality/get_led_status/")
      .then((res) => {
        setState({
          auto_run: {
            current: res.data.temperature,
            ...res.data,
          },
        });
      });
  }, []);

  const handleChange = (e) => {
    const { auto_meanal, auto_run } = state;
    PostData_LED(e.target.checked, this_mode);
    setState({
      // ...auto_meanal,
      auto_run: {
        ...auto_run,
        [this_mode]: e.target.checked,
        current: e.target.checked,
      },
    });
  };

  function css_mode(nunm, unit) {
    console.log(typeof nunm);
    if (unit === "temperature") {
      if (nunm > 37) {
        return ".s_container-green";
      } else if (nunm < 15) {
        return ".s_container-blue"
      } else {
        return "normal";
      }
    } else if (unit === "humidity") {
      if (nunm > 80) {
        return "red";
      } else if (nunm < 20) {
        return "blue";
      } else {
        return "noraml  ";
      }
      // return;
      // } else if (unit === "co") {
      //   if (nunm > 5) {
      //     return "red";
      //   } else if (nunm < 1) {
      //     return "blue";
      //   } else {
      //     return "green";
      //   }
    } 
  }
  const type_measure = this_mode === "co" ? "CO" : this_mode;
  const this_status = type_measure + "_status";
  return (
    <div className="App">
      <div className={color_mode ? "s_container_dark " : "s_container"}>
        <div id="topic_project">Air Quality Report</div>
        {data_r.length > 0 && (
          <Panel
            weather={data_r[0][this_status]}
            number={data_r[0][type_measure]}
            TypeOfAir={type_measure}
            img_air_url={data_r[0][this_status]}
          />
        )}
        <Nav_type
          setThis_mode={setThismode}
          this_mode={this_mode}
          state={state}
          setState={setState}
        />
        <div className="mini_container">
          <div id="bg_white">◽️ Dark Mode</div>
          <FormControlLabel
            control={
              <Switch
                checked={color_mode}
                onChange={HandleChange_color_mode}
                name="change_color"
              />
            }
            label={color_mode ? "Dark Mode" : "Normal Mode"}
          />
        </div>
        <div className="mini_container">
          <div id="bg_white">◽️ LED-SWITCH</div>
          <FormControlLabel
            control={
              <Switch
                checked={state.auto_run.current}
                onChange={handleChange}
                name="auto_run"
              />
            }
            label={state.auto_run.current ? "ON" : "OFF"}
          />
        </div>
        <a
          href="https://airquality.zeqa.net/air_quality/subscribe_line_notify/"
          className="remove_underline"
        >
          <div id="bottom_project">Get LINE Notification</div>
        </a>
      </div>
      {/* <Link
        to={{
          pathname: "./Graph.jsx",
          state: { id: 1, name: "sabaoon", shirt: "green" },
        }}
      >
        Learn More
      </Link> */}
    </div>
  );
}

export default Main_page;
