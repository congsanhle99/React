import React from "react";
import "./Modal.scss";
import { AiOutlineClose } from "react-icons/ai";
function Modal({ closeModal }) {
  return (
    <>
      <section className="modal-section --100vh">
        <div className="modal --flex-center">
          <div className="modal-content --card --bg-light --p2">
            <AiOutlineClose color="red" size={24} className="close-icon" onClick={closeModal}></AiOutlineClose>

            <div className="modal-head">
              <h3>Do you want to continue?</h3>
            </div>

            <div className="modal-body">
              <h5 className="--m2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt alias libero tempore corrupti,
                labore fugiat, corporis porro sequi accusamus aut pariatur quos ad perferendis voluptates hic officiis
                in possimus?
              </h5>
            </div>

            <div className="modal-footer --flex-end">
              <button className="--btn --btn-danger" onClick={closeModal}>
                Cancel
              </button>
              <button className="--btn --btn-success">Process</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Modal;
