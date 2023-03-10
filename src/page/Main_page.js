import "../App.css";
import Panel from "../components/Panel";
import axios from "axios";
import { GetData_LED, GetData_recent, PostData_LED } from "../services/ser";
import { useEffect, useState } from "react";
import Nav_type from "../components/Nav_type";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function Main_page() {
  const [this_mode, setThismode] = useState("temperature");
  const [state, setState] = React.useState({
    // auto_meanal: true,
    // auto_run: true,
    auto_run: {
      current: false,
      co: true,
      humidity: true,
      temperature: true,
    },
  });
  const [light_state_menal, setLight_state_menal] = useState({
    light_meanal: true,
  });

  const handleChange_light_state = (event) => {
    setLight_state_menal({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const DataLED = async () => {
    try {
      const var_led_data = await GetData_LED();
      // console.log("yioooo");
      // console.log(var_led_data);
      // console.log("yioooo");

      // setState(var_led_data);
    } catch (e) {
      console.log(e);
    }
  };
  // DataLED();
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
  // useEffect(() => {
  //   // console.log(state);
  //   DataRecent();
  // }, [state]);
  // const handleChange_meanal = (e) => {
  // console.log(air_mode)
  // console.log(this_status);
  // console.log([this_mode])
  // const { auto_run,auto_meanal } = state; // De-structure keep old data >>to save(or state.auto_run )
  // console.log(state)
  // setState({
  //   auto_meanal: e.target.checked,
  //   auto_run: auto_run,
  // });
  // };

  const handleChange = (e) => {
    // console.log(air_mode)
    // console.log(this_status);
    // console.log([this_mode]);
    // console.log(state)
    const { auto_meanal, auto_run } = state;
    // console.log(state);
    // console.log(light_state_menal);
    // console.log('this_mode', this_mode)
    // console.log(e.target.checked)
    // console.log("CALLLLLLLLLLL");
    PostData_LED(e.target.checked, this_mode);
    setState({
      // ...auto_meanal,
      auto_run: {
        ...auto_run,
        [this_mode]: e.target.checked,
        current: e.target.checked,
      },
    });
    // setState({
    //   ...state,
    //   auto_run: {
    //     ...state.auto_run
    //   },
    //   [e.target.name]: e.target.checked,
    // });
  };

  const type_measure = this_mode === "co" ? "CO" : this_mode;
  const this_status = type_measure + "_status";
  return (
    <div className="App">
      <div className="s_container">
        <div id="topic_project">Air Quality Report</div>
        {data_r.length > 0 && (
          <Panel
            weather={data_r[0][this_status]}
            number={data_r[0][type_measure]}
            TypeOfAir={type_measure}
            img_air_url={data_r[0][this_status]}
            // para = {data_r[0]}
          />
        )}
        <Nav_type
          setThis_mode={setThismode}
          this_mode={this_mode}
          state={state}
          setState={setState}
        />

        <div className="mini_container">
          <div id="bg_white">?????? Dark Mode</div>

          <FormControlLabel
            control={
              <Switch
                checked={light_state_menal["light_meanal"]}
                onChange={handleChange_light_state}
                name="light_meanal"
              />
            }
            label={light_state_menal.light_meanal ? "Auto" : "Manual"}
          />
        </div>

        {/*         <div className="mini_container">
          <div id="bg_white">?????? Light Status</div>

          <FormControlLabel
            control={
              <Switch
                checked={state.auto_meanal}
                onChange={handleChange_meanal}
                name="auto_meanal"
              />
            }
            label={state.auto_meanal ? "Auto" : "Meanal"}
          />
        </div> */}

        <div className="mini_container">
          <div id="bg_white">?????? LED-SWITCH</div>
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
        {/* <h1>{state}{light_state_menal}</h1> */}
        <a
          href="https://airquality.zeqa.net/air_quality/subscribe_line_notify/"
          className="remove_underline"
        >
          <div id="bottom_project">Get LINE Notification</div>
        </a>
      </div>
    </div>
  );
}
export default Main_page;
