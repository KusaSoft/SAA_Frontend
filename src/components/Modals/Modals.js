import React from "react";
import { useModal } from "../../hooks/useModal";
import Modal from "./Modal";
import AskReservationRequest from "../ask/askReservationRequest";
const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(true);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <AskReservationRequest  action={closeModal1}></AskReservationRequest>
      </Modal>
    </div>
  );
};

export default Modals;
