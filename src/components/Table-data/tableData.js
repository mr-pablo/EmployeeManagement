import React from "react";
import Nav_bar from "../navbar/navbar";
import "./tableData.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FaRegUser } from "react-icons/fa";
import { GoColumns } from "react-icons/go";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Dropdown from "react-bootstrap/Dropdown";
// import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import EmployeeInfo from "../EmployeeInfo/employeeInfo";


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("DRV1", "Rasi", 6235049121, "04-03-2024", "04-03-2024"),
  createData("DRV2", "Favas", 7994020923, "04-03-2024", "04-03-2024"),
  createData("DRV3", "Sahl", 9496279843, "04-03-2024", "04-03-2024"),
  createData(
    "DRV4",
    "Naseema anjukhandan house sidheeqabad",
    9745660899,
    "04-03-2024",
    "04-03-2024"
  ),

  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
  createData("DRV5", "Abu", 9876543210, "04-03-2024", "04-03-2024"),
];

export default function TableData() {
    

  return (
    <div style={{ display: "flex" }}>
      <Nav_bar />
      <div className="TableData-Body">
        <div className="tabletop-div">
          <div className="body-headings">
            <h1>Driver List</h1>
            <h6>Your all Drivers are listed Below</h6>
          </div>
          <div className="body-headings-right">
            <input id="search" type="search" placeholder="Type to Search..." />
            <div
              className="dropdowns-div"
              style={{ display: "flex", gap: "10px" }}
            >
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <HiOutlineAdjustmentsHorizontal />
                  Filter
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" className="inside-dropdown">
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="inside-dropdown">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="inside-dropdown">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown autoClose="outside">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <GoColumns />
                  Columns
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#/action-2"
                    className="checkbox_dropdown_options"
                  >
                    <FormControlLabel
                      control={<Checkbox style={{ color: "#076d6d" }} />}
                      label="Driver_ID"
                      style={{ color: "#076d6d" }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    className="checkbox_dropdown_options"
                  >
                    {" "}
                    <FormControlLabel
                      checked
                      required
                      control={
                        <Checkbox style={{ color: "#076d6d" }} defaultChecked />
                      }
                      label="Name"
                      style={{ color: "#076d6d" }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    className="checkbox_dropdown_options"
                  >
                    <FormControlLabel
                      control={<Checkbox style={{ color: "#076d6d" }} />}
                      label="Contact Number"
                      style={{ color: "#076d6d" }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    className="checkbox_dropdown_options"
                  >
                    {" "}
                    <FormControlLabel
                      checked
                      required
                      control={
                        <Checkbox style={{ color: "#076d6d" }} defaultChecked />
                      }
                      label="Vehicle Type"
                      style={{ color: "#076d6d" }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    className="checkbox_dropdown_options"
                  >
                    <FormControlLabel
                      control={<Checkbox style={{ color: "#076d6d" }} />}
                      label="Vehicle Number"
                      style={{ color: "#076d6d" }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    className="checkbox_dropdown_options"
                  >
                    <FormControlLabel
                      control={<Checkbox style={{ color: "#076d6d" }} />}
                      label="Joining Date"
                      style={{ color: "#076d6d" }}
                    />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className="add-button">
                <FaRegUser /> Add Driver
              </button>
            </div>
          </div>
        </div>
        <div className="scrolling_div">
          <TableContainer className="table-container">
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="table-head">Driver_ID</TableCell>
                  <TableCell className="table-head">Name</TableCell>
                  <TableCell className="table-head">Contact Number</TableCell>
                  <TableCell className="table-head">Vehicle Type</TableCell>
                  <TableCell className="table-head">Vehicle Number</TableCell>
                  <TableCell className="table-head">Joining Date</TableCell>
                  <TableCell className="table-head"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="table-body"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell className="table-body">{row.calories}</TableCell>
                    <TableCell className="table-body">{row.fat}</TableCell>
                    <TableCell className="table-body">{row.carbs}</TableCell>
                    <TableCell className="table-body">{row.protein}</TableCell>
                    <TableCell className="table-body">{row.protein}</TableCell>
                    <TableCell className="table-body">
                      <button className="view-button">Edit</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
