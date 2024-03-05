import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { CiMail } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
// import Dashboard from "../Dashboards/dashboard";
import Menubar from "../Menu_bar/menubar";
import Home from "../Home/home";


function Nav_bar() {
  const [isOffcanvasVisible, setOffcanvasVisible] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasVisible(!isOffcanvasVisible);
  };
  return (
    <>
      <Navbar className="Navbar_full" bg="light" data-bs-theme="light">
        <Container className="navbar_container">
          <div>
            <Navbar.Brand href="#home">
              <img
                className="logo"
                src="/employee_management_logo.png"
                alt="Logo"
              />
            </Navbar.Brand>
            <i
              onClick={toggleOffcanvas}
              className="bi bi-list offcanvas_button"
            ></i>
          </div>
          <Nav className="navbar_content">
            <CiBellOn className="icons" />
            <CiMail className="icons" />
            <div className="user_image"></div>
          </Nav>
        </Container>
      </Navbar>
      {/* <div className="home_body"> */}
        <div
          className={
            isOffcanvasVisible ? "offcanvas_left" : "offcanvas_left_hidden"
          }
        >
          <Menubar />
        </div> 
      {/* </div> */}
    </>
  );
}

export default Nav_bar;
