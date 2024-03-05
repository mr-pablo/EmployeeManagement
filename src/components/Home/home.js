import App from "../../App"
import Dashboard from "../Dashboards/dashboard"
import TableData from "../Table-data/tableData"
import Nav_bar from "../navbar/navbar"
import "./home.css"
import React from 'react'
import { Route } from "react-router-dom"


export default function Home() {
  return (
    <div className="d-flex">
      <Nav_bar/>
        <div className="body_content">

          <div className="dashboard_wrap">
            <Dashboard />
            <Dashboard />
          </div>
          <div className="dashboard_wrap">
            <Dashboard/>
            <Dashboard />
          </div>
          
        </div>
    </div>
  )
}
