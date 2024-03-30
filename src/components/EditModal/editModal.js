import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./editModal.css";
import { FaRegEdit } from "react-icons/fa";

const EditModal = ({ showModal, closeModal, id, dataArray ,setTableData}) => {
  const [foundObject, setFoundObject] = useState(null);

  useEffect(() => {
    const found = dataArray.find((obj) => obj.id === id);
    setFoundObject(found);
  }, [id, dataArray]);

  const editChange = (event) => {
    const { name, value } = event.target;
    setFoundObject(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const deleteEmployee = () => {
    const updatedArray = dataArray.filter(obj => obj.id !== foundObject.id);
    setTableData(updatedArray);
    console.log("Updated Array after deletion:", updatedArray);
    closeModal();
    
  }


  const handleEdit = (e) => {
    e.preventDefault();
    const index = dataArray.findIndex(obj => obj.id === foundObject.id);
    if (index !== -1) {
      const updatedArray = [...dataArray];
      updatedArray[index] = foundObject;
      setTableData(updatedArray);
      console.log("Updated Array:", updatedArray);
    }
    closeModal();
  };

  return (
    <>
      {foundObject && (
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
              Edit Driver
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <form className="viewForm">
              <div className="formRow">
                <div className="formGroup1">
                  <div className="label">Driver_ID</div>
                  <input
                    value={foundObject.driver_ID}
                    placeholder="DRV_001"
                    type="text"
                    className="inputName"
                    name="driver_ID"
                      onChange={editChange}
                  />
                </div>
                <div className="formGroup1">
                  <div className="label">Name</div>
                  <input
                    value={foundObject.name}
                    type="text"
                    placeholder="Name"
                    className="inputName"
                    name="name"
                      onChange={editChange}
                  />
                </div>
              </div>
              <div className="formRow">
                <div className="formGroup1">
                  <div className="label">Contact Number</div>
                  <input
                    value={foundObject.number}
                    type="number"
                    placeholder="9876543210"
                    className="inputName"
                    name="number"
                      onChange={editChange}
                  />
                </div>
                <div className="formGroup1">
                  <div className="label">Vehicle Type</div>
                  <input
                    value={foundObject.vehicleType}
                    type="text"
                    placeholder="Vehicle Type"
                    className="inputName"
                    name="vehicleType"
                      onChange={editChange}
                  />
                </div>
              </div>
              <div className="formRow">
                <div className="formGroup1">
                  <div className="label">Vehicle Number</div>
                  <input
                    value={foundObject.vehicleNumber}
                    type="text"
                    placeholder="Vehicle Number"
                    className="inputName"
                    name="vehicleNumber"
                      onChange={editChange}
                  />
                </div>
                <div className="formGroup1">
                  <div className="label">Joining Date</div>
                  <input
                    value={foundObject.joiningDate}
                    type="date"
                    className="inputName"
                    name="joiningDate"
                      onChange={editChange}
                  />
                </div>
              </div>
              <Modal.Footer style={{ backgroundColor: "#e6f0f0" }}>
                <Button
                  className="closeButton"
                  variant="danger"
                  onClick={deleteEmployee}
                >
                  Delete
                </Button>
                <Button
                  className="closeButton"
                  variant="secondary"
                  onClick={closeModal}
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  className="editButton"
                  onClick={handleEdit}
                >
                  Edit
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default EditModal;
