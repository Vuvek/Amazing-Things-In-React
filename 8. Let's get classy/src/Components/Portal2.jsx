import React from "react";
import ReactDOM from "react-dom";

const styleRootObj = {
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0,0,0,0.3",
  maxHeight: "100vh",
  overFlowY: "auto",
};

const styleModal = {
  padding: "20",
  background: "#fff",
  borderRadius: "2px",
  minHeight: "300px",
  margin: "1rem",
  position: "relative",
  minWidth: "300px",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.18)",
  justifySelf: "center",
};

function Portal2(props) {
  const handleClose = (event) => {
    event.preventDefault();
    event.stopPropagation();
    props.handleClose();
  };
  return (
    <div style={styleRootObj} onClick={handleClose}>
      <div style={styleModal}>
        {props.children}
        <hr />
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

const Modal = (props) =>
  ReactDOM.createPortal(
    <Portal2 {...props}>{props.children}</Portal2>,
    document.getElementById("modal-root")
  );

export default Modal;
