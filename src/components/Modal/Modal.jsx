import ReactModal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

ReactModal.setAppElement("#root");

export default function Modal({ isOpen, onClose, title, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "64px",
          borderRadius: "8px",
          width: "400px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 102,
          position: "relative",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 101,
        },
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            position: "absolute",
            top: "20px",
            right: "20px",
          }}
        >
          <AiOutlineClose />
        </button>
      </div>
      <h2
        style={{
          fontWeight: 500,
          fontSize: "40px",
          lineHeight: "120%",
          letterSpacing: "-0.02em",
          marginTop: "20px",
          textAlign: "left",
          marginBottom: "20px",
        }}
      >
        {title}
      </h2>
      <div>{children}</div>
    </ReactModal>
  );
}
