// import React, { useState } from 'react';
import React from "react";
import "./menubar.css";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { IoCarSportOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { RiExchangeDollarFill } from "react-icons/ri";
import { GoShieldLock } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";

export function Menubar() {
  return (
    <div>
      <div className="menu_name">MENU</div>
      <NavLink to="/" className="menu-link">
        <div className="menus"><RxDashboard/>DASHBOARD</div>
      
      </NavLink>

      <div className="menu_name">TRANSPIORTATION</div>
      <NavLink to="/trip_portal" className="menu-link">
        <div className="menus"><SlCalender/> TRIP PORTAL</div>
      </NavLink>
      <NavLink to="/vehicles" className="menu-link">
        <div className="menus"><IoCarSportOutline/>VEHICLES</div>
      </NavLink>
      <NavLink to="/drivers" className="menu-link">
        <div className="menus"><FaRegUser/>DRIVERS</div>
      </NavLink>

      <div className="menu_name">MANAGEMENT</div>

      <NavLink to="/employees" className="menu-link">
        <div className="menus"><LuUsers/>EMPLOYEES</div>
      </NavLink>
      <NavLink to="/expenses" className="menu-link">
        <div className="menus"><RiExchangeDollarFill/>EXPENSES</div>
      </NavLink>
      <NavLink to="/accessControl" className="menu-link">
      <div className="menus"><GoShieldLock/>ACCESS CONTROL</div>
      </NavLink>
      <NavLink to="/settings" className="menu-link">
      <div className="menus"><IoSettingsOutline/>SETTINGS</div>
      </NavLink>

      
     
    </div>
  );
}

export default Menubar;
