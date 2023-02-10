// import logo from './logo.svg';
import "./App.css";
import ResponsiveAppBar from "./components/Nav_ber";
import Panel from "./components/Panel";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Panel weather="" number="" typeofair="" />
    </div>
  );
}

export default App;
