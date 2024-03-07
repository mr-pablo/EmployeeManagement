import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./employeeInfo.css";
import { FaRegEdit } from "react-icons/fa";

const EmployeeInfo = ({ showModal, closeModal, title ,save}) => {
  return (
    <>
      {/* <Modal show={showModal} onHide={closeModal} className="editModal">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header> */}
      <Modal
        size="lg"
        show={showModal}
        onHide={closeModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton style={{backgroundColor:"#e6f0f0"}}>
          <Modal.Title style={{color:"#0b5858",fontWeight:"bold"}} id="example-modal-sizes-title-lg">{title}</Modal.Title>
         
        </Modal.Header>
        <Modal.Body className="modalBody">
          <form className="viewForm">
            <div className="formRow">
              <div className="formGroup1">
                <div className="label">Driver_ID</div>
                <input placeholder="DRV_001" type="text" className="inputName" />
              </div>
              <div className="formGroup1">
                <div className="label">Name</div>
                <input type="text" placeholder="Name" className="inputName" />
              </div>
            </div>
            <div className="formRow">
              <div className="formGroup1">
                <div className="label">Contact Number</div>
                <input type="number" placeholder="9876543210" className="inputName" />
              </div>
              <div className="formGroup1">
                <div className="label">Vehicle Type</div>
                <input type="text" placeholder="Vehicle Type" className="inputName" />
              </div>
            </div>
            <div className="formRow">
              <div className="formGroup1">
                <div className="label">Vehicle Number</div>
                <input type="text" placeholder="Vehicle Number" className="inputName" />
              </div>
              <div className="formGroup1">
                <div className="label">Joining Date</div>
                <input type="date"  className="inputName" />
              </div>
            </div>
            {/* <div className="formRow">
              <div className="formGroup1">
                <div className="label">Driver_ID</div>
                <input type="text" className="inputName" />
              </div>
              <div className="formGroup1">
                <div className="label">Name</div>
                <input type="text" className="inputName" />
              </div>
            </div> */}
          </form>
        </Modal.Body>

        <Modal.Footer style={{backgroundColor:"#e6f0f0"}}>
          <Button className="closeButton" variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button className="editButton" onClick={closeModal}>
            {save}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeInfo;
