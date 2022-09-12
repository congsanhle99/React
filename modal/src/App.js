import "./App.scss";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  return (
    <>
      <section className="intro-section --100vh --flex-center">
        <div className="intro --center-all">
          <img src="" alt="một chiếc img xinh xẻo" />
          <h1 className="--text-light --text-md">
            Let <span className="--fw-thin">create a modal!!!</span>
          </h1>
          <p className="--text-light --mb2">Click below to open modal</p>
          <button className="--btn --btn-success" onClick={() => setShowModal(true)}>
            OPEN MODAL
          </button>
        </div>
      </section>
      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
}

export default App;
