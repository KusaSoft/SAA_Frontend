import "./Modal.css";
import React from "react";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} >
      <div className="modal-container" onClick={handleModalContainerClick}>
        {children}
      </div>
    </article>
  );
};

export default Modal;
