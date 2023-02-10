// import React, { useState, useEffect } from "react";
import "../App.css";
import ResponsiveAppBar from "../components/Nav_ber";
import Panel from "../components/Panel";
import { GetData_recent } from "../services/ser";
import { useEffect, useState } from "react";

const DataRecent = async () => {
  try {
    const var_data = await GetData_recent();
    console.log(var_data);
    // setData(var_data);
  } catch (e) {
    console.log(e);
  }
};

function Main_page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    DataRecent();
  }, []);
  
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Panel weather="" number="" typeofair="" img_air_url="" />
    </div>
  );
}
export default Main_page;
