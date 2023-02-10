// import React, { useState, useEffect } from "react";
import "../App.css";
// import ResponsiveAppBar from "../components/Nav_ber";
import Panel from "../components/Panel";
import { GetData_recent } from "../services/ser";
import { useEffect, useState } from "react";

// const Data_10min = async () => {
//   try {
//     const var_data = await GetData_10min();
//     // console.log(var_data);
//     setData(var_data);
//   } catch (e) {
//     console.log(e);
//   }
// };



function Main_page() {
  const [data_r, setData] = useState([]);

  const DataRecent = async () => {
    try {
      const var_data = await GetData_recent();
      console.log(var_data);
      setData(var_data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    DataRecent();
  }, []);

  return (
    <div className="App">
      {/* <ResponsiveAppBar /> */}
      <Panel
        weather={data_r[0].temperature_status}
        number={data_r[0].temperature}
        typeofair=""
        img_air_url=""
      />
    </div>
  );
}
export default Main_page;
