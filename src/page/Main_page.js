import "../App.css";
import Panel from "../components/Panel";
import { GetData_recent } from "../services/ser";
import { useEffect, useState } from "react";
import Nav_type, { air_mode } from "../components/Nav_type";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function Main_page() {
 
  const [state, setState] = React.useState({
    auto_meanal: true,
    auto_run: true,
  });
  // air_mode
  const handleChange = (event) => {
    // console.log(air_mode)
    // console.log(this_status);

    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    // console.log(state);
  };

  const [data_r, setData] = useState([]);

  const DataRecent = async () => {
    try {
      // console.log(air_mode);

      const var_data = await GetData_recent();
      console.log(...var_data);
      setData(var_data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log(air_mode);

    DataRecent();
  }, []);
  const type_measure = air_mode;
  const this_status = type_measure + "_status";
  return (
    <div className="App">
      <div className="s_container">
        <div id="topic_project">Air Quality Report</div>
        {data_r.length > 0 && (
          <Panel
            weather={data_r[0].air_mode}
            number={data_r[0].this_status}
            typeofair={air_mode}
            img_air_url=""
          />
        )}
        <Nav_type />

        <div className="mini_container">
          <div id="bg_white">◽️ Light Status</div>

          <FormControlLabel
            control={
              <Switch
                checked={state.auto_meanal}
                onChange={handleChange}
                name="auto_meanal"
              />
            }
            label={state.auto_meanal ? "Auto" : "Meanal"}
          />
        </div>

        <div className="mini_container">
          <div id="bg_white">◽️ Auto-Run</div>
          <FormControlLabel
            control={
              <Switch
                checked={state.auto_run}
                onChange={handleChange}
                name="auto_run"
              />
            }
            label={state.auto_run ? "ON" : "OFF"}
          />
        </div>
      </div>
    </div>
  );
}
export default Main_page;
