import React from "react";
import Garp from "../components/graphing.jsx";
import { useState, useEffect } from "react";
import { getData } from "../services/sensor.js";
import "../styles/Graph.css";
// from "./Main_page.js" import
// import x from "./Main_page";
const Graph = () => {
  const [time, setTime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      getData().then((data) => setTime(data));
      // console.log(1)
    };
    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    // <div className={color_mode? "graph-container_dark":"graph-container"}>
    // <div className={color_mode? "graph-container_dark":"graph-container"}></div>
    // <div className={color_mode? "graph-container_dark":"graph-container"}>
    <div className="separate-graph">
      <Garp info={time} graphname="temperature" color="#F55050" />
      <Garp info={time} graphname="humidity" color="#F55050" />
      <Garp info={time} graphname="CO" color="#F55050" />
    </div>
  );
};

export default Graph;
