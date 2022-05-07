import logo from "./logo.svg";
import "./App.css";
import Offers from "./mangesh_data/Offers.jsx";
import FilterDiv from "./mangesh_data/FilterDiv";

function App() {
  return (
    <div className="App">
      <Offers />
      <br />
      <FilterDiv />
    </div>
  );
}

export default App;
