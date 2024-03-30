import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./employeeInfo.css";
import { FaRegEdit } from "react-icons/fa";

const EmployeeInfo = ({ showModal, closeModal, title, onFormSubmit }) => {
  const [count, setCount] = useState(1);
  const [DataArray, setDataArray] = useState([]);

  const [formData, setFormData] = useState({
    driver_ID: "",
    name: "",
    number: "",
    vehicleType: "",
    vehicleNumber: "",
    joiningDate: "",
    id: count // Initial ID set to count
  });

  const inputchange = (event) => {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmited = (e) => {
    e.preventDefault();
    // Generate a unique ID based on count
    const id = count;
    // Update formData with the new ID
    const formDataWithId = { ...formData, id: id };
    // Call onFormSubmit with formDataWithId
    onFormSubmit(formDataWithId);
    // Reset formData
    setFormData({
      driver_ID: "",
      name: "",
      number: "",
      vehicleType: "",
      vehicleNumber: "",
      joiningDate: "",
      id: count + 1 // Update ID for the next form
    });
    // Increment count
    setCount(count + 1);
    // Add formDataWithId to DataArray
    setDataArray((oldDataArray) => [...oldDataArray, formDataWithId]);
  };

  useEffect(() => {
    console.log(DataArray);
  }, [DataArray]);
  
  return (
    <>
      <Modal
        size="lg"
        show={showModal}                                                                                                                                                                            
        onHide={closeModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton style={{ backgroundColor: "#e6f0f0" }}>
          <Modal.Title
            style={{ color: "#0b5858", fontWeight: "bold" }}
            id="example-modal-sizes-title-lg"
          >
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <form className="viewForm" onSubmit={formSubmited}>
            <div className="formRow">
              <div className="formGroup1">
                <div className="label">Driver_ID</div>
                <input
                  value={formData.driver_ID}
                  placeholder="DRV_001"
                  type="text"
                  className="inputName"
                  name="driver_ID"
                  onChange={inputchange}
                />
              </div>
              <div className="formGroup1">
                <div className="label">Name</div>
                <input
                  value={formData.name}
                  type="text"
                  placeholder="Name"
                  className="inputName"
                  name="name"
                  onChange={inputchange}
                />
              </div>
            </div>
            <div className="formRow">
              <div className="formGroup1">
                <div className="label">Contact Number</div>
                <input
                  value={formData.number}
                  type="number"
                  placeholder="9876543210"
                  className="inputName"
                  name="number"
                  onChange={inputchange}
                />
              </div>
              <div className="formGroup1">
                <div className="label">Vehicle Type</div>
                <input
                  value={formData.vehicleType}
                  type="text"
                  placeholder="Vehicle Type"
                  className="inputName"
                  name="vehicleType"
                  onChange={inputchange}
                />
              </div>
            </div>
            <div className="formRow">
              <div className="formGroup1">
                <div className="label">Vehicle Number</div>
                <input
                  value={formData.vehicleNumber}
                  type="text"
                  placeholder="Vehicle Number"
                  className="inputName"
                  name="vehicleNumber"v
                  onChange={inputchange}
                />
              </div>
              <div className="formGroup1">
                <div className="label">Joining Date</div>
                <input
                  value={formData.joiningDate}
                  type="date"
                  className="inputName"
                  name="joiningDate"
                  onChange={inputchange}
                />
              </div>
            </div>
            <Modal.Footer style={{ backgroundColor: "#e6f0f0" }}>
              <Button
                className="closeButton"
                variant="secondary"
                onClick={closeModal}
              >
                Close
              </Button>
              <Button type="submit" className="editButton" onClick={closeModal}>
                Save
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EmployeeInfo;
