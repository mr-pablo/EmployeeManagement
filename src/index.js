import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Trip_portal from "./components/Trip_portal/trip_portal";
import Vehicles from "./components/Vehicles/vehicles";
import Drivers from "./components/Drivers/drivers";
import Employees from "./components/Employees/employees";
import Expenses from "./components/Expenses/expenses";
import AccessControl from "./components/AccessControl/accessControl";
import Settings from "./components/Settings/settings";
import TableData from "./components/Table-data/tableData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip_portal" element={<Trip_portal/>}></Route>
        <Route path="/vehicles" element={<Vehicles/>}></Route>
        <Route path="/drivers" element={<Drivers/>}></Route>
        <Route path="/employees" element={<Employees/>}></Route>
        <Route path="/expenses" element={<Expenses/>}></Route>
        <Route path="/accessControl" element={<AccessControl/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
        <Route path="/table-data" element={<TableData/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
