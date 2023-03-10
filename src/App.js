import "./App.css";
import Graph from "./page/Graph";
import Main_page from "./page/Main_page";

function App() {
  return (
    <>
      <div className="all-container">
        <Main_page />
        <div className="graph-container">
          <Graph />
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
