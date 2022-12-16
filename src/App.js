import './App.css';
import UserProvider from './UserProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

import Vehicle from "./views/vehicle";
import AddVehicle from "./views/addVehicle";
import Login from "./views/login";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/car_manager" element={<Vehicle />} />
          <Route path="/addVehicle" element={<AddVehicle />} />
        </Routes>
      </Router>
  );
}

export default App;
