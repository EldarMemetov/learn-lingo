// import ReactModal from "react-modal";
// import { AiOutlineClose } from "react-icons/ai";
// import { useEffect } from "react";

// ReactModal.setAppElement("#root");

// export default function Modal({ isOpen, onClose, title, children }) {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   return (
//     <ReactModal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       style={{
//         overlay: {
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "#000c",
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           zIndex: 1000,
//           padding: "20px", // Отступы сверху и снизу
//         },
//         content: {
//           backgroundColor: "#fff",
//           borderRadius: "10px",
//           maxHeight: "calc(100vh - 40px)", // Учитываем верхний и нижний отступы
//           maxWidth: "500px",
//           overflowY: "auto",
//           padding: "64px",
//           position: "relative",
//           margin: "0 auto",
//         },
//       }}
//     >
//       <div style={{ display: "flex", justifyContent: "flex-end" }}>
//         <button
//           onClick={onClose}
//           style={{
//             background: "none",
//             border: "none",
//             cursor: "pointer",
//             fontSize: "1.5rem",
//             position: "absolute",
//             top: "16px",
//             right: "16px",
//           }}
//         >
//           <AiOutlineClose />
//         </button>
//       </div>
//       <h2
//         style={{
//           fontWeight: 500,
//           fontSize: "32px",
//           lineHeight: "120%",
//           letterSpacing: "-0.02em",
//           marginTop: "16px",
//           textAlign: "left",
//           marginBottom: "16px",
//         }}
//       >
//         {title}
//       </h2>
//       <div style={{ paddingBottom: "16px" }}>{children}</div>
//     </ReactModal>
//   );
// }
import ReactModal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";

ReactModal.setAppElement("#root");

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          background: "#000c",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
        },
        content: {
          backgroundColor: "#fff",
          borderRadius: "10px",
          maxHeight: "70vh",
          maxWidth: "500px",
          overflowY: "auto",
          padding: "64px",
          position: "relative",
          margin: "0 auto",
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
            top: "16px",
            right: "16px",
          }}
        >
          <AiOutlineClose />
        </button>
      </div>
      <h2
        style={{
          fontWeight: 500,
          fontSize: "32px",
          lineHeight: "120%",
          letterSpacing: "-0.02em",
          marginTop: "16px",
          textAlign: "left",
          marginBottom: "16px",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          paddingBottom: "16px",
        }}
      >
        {children}
      </div>
      {/* Стили для скроллбара */}
      <style>
        {`
          .ReactModal__Content {
            scrollbar-width: thin;
            scrollbar-color: #ccc transparent;
          }
          .ReactModal__Content::-webkit-scrollbar {
            width: 8px;
          }
          .ReactModal__Content::-webkit-scrollbar-track {
            background: transparent;
          }
          .ReactModal__Content::-webkit-scrollbar-thumb {
            background-color: #ccc;
            border-radius: 4px;
          }
          .ReactModal__Content::-webkit-scrollbar-thumb:hover {
            background-color: #aaa;
          }
        `}
      </style>
    </ReactModal>
  );
}
