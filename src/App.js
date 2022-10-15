import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

import Vehicle from "./views/vehicle";
import AddVehicle from "./views/addVehicle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Vehicle />} />
        <Route path="/addVehicle" element={<AddVehicle />} />
      </Routes>
    </Router>
  );
}

export default App;
