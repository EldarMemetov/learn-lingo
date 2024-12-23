import { useState } from "react";
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

export default function ModalManager({ children }) {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      {typeof children === "function" ? children({ openModal }) : children}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent === "login" ? "Log In" : "Registration"}
      >
        {modalContent === "login" && <LoginForm onClose={closeModal} />}
        {modalContent === "registration" && (
          <RegistrationForm
            onSubmit={(data) => console.log("Registration Data:", data)}
            onClose={closeModal}
          />
        )}
      </Modal>
    </>
  );
}
