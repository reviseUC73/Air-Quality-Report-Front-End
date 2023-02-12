import "./App.css";
import Graph from "./page/Graph";
import Main_page from "./page/Main_page";
import { useEffect, useState } from "react";

function App() {
  // let x
  const [color_mode, setColor_mode] = useState(false);
  const HandleChange_color_mode = (event) => {
    // console.log(event.target.checked);
    setColor_mode(event.target.checked);
      
  };
  return (
    <>
      <div className="all-container">
        <Main_page color_mode={color_mode} HandleChange_color_mode={HandleChange_color_mode} />
        <div  className={color_mode? "graph-container_dark":"graph-container"}>
          <Graph color_mode={color_mode}/>
        </div>
      </div>
      <footer className="bottom">
        <p className="center_text transclucent">
          © Group 6 Exceed 
        </p>
      </footer>
    </>
  );
}

export default App;
