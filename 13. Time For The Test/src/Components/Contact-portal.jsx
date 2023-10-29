// import React from "react";
// import "../../modal.css";
// import ReactDOM from "react-dom";

// const modalRoot = document.getElementById("modal-root");

// class Modal extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.element = document.createElement("div");
//   }

//   componentDidMount() {
//     this.element.setAttribute("id", "handle-modal");
//     modalRoot.appendChild(this.element);
//   }

//   componentWillUnmount() {
//     console.log("hello unmount");
//     modalRoot.removeChild(this.element);
//   }

//   render() {
//     return ReactDOM.createPortal(this.props.children, this.element);
//     // return <>{this.props.children}</>;
//   }
// }

// class Contact extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       clicks: 0,
//       openModal: false,
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.handleOpenModal = this.handleOpenModal.bind(this);
//     this.removeModal = this.removeModal.bind(this);
//   }

//   handleClick() {
//     // This will fire when the button in Child is clicked,
//     // updating Parent's state, even though button
//     // is not direct descendant in the DOM.
//     this.setState((prev) => {
//       return {
//         ...prev,
//         clicks: prev.clicks + 1,
//       };
//     });
//   }

//   handleOpenModal() {
//     this.setState((prev) => {
//       return {
//         ...prev,
//         openModal: true,
//       };
//     });
//   }

//   removeModal() {
//     this.setState((prev) => {
//       return {
//         ...prev,
//         openModal: false,
//       };
//     });
//   }

//   render() {
//     console.log(this.state.openModal, "lkfdsjlk", this.state.clicks);
//     return (
//       <>
//         <div className="contact-container" onClick={this.handleClick}>
//           <p>Number of Clicks : {this.state.clicks}</p>
//           <p>
//             Open up the browser DevTools to observe that the button is not a
//             child of the div with the onClick handler.
//           </p>

//           {this.state.openModal && (
//             <Modal>
//               <Child removeChild={this.removeModal} />
//             </Modal>
//           )}
//         </div>

//         <button onClick={this.handleOpenModal}>Open</button>
//       </>
//     );
//   }
// }

// const Child = ({ removeChild }) => {
//   // The click event on this button will bubble up to parent,
//   // because there is no 'onClick' attribute defined

//   const handleClick = (event) => {
//     // event.preventDefault();
//     console.log("hello");
//   };

//   const handleClose = (event) => {
//     event.stopPropagation();
//     removeChild();
//   };

//   return (
//     <>
//       <div className="modal">
//         <button onClick={handleClick}>Click</button>
//         <button onClick={handleClose}>Close</button>
//       </div>
//     </>
//   );
// };

// export default Contact;

import React from "react";

export default function Contact() {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4 items-start">Contact Us</h1>
      <form className="flex flex-col" action="">
        <input
          className="border-2  border-black p-2 m-4 rounded-lg w-[500px]"
          placeholder="Name"
          type="text"
        />
        <input
          className="border-2  border-black p-2 m-4 rounded-lg w-[500px]"
          placeholder="Message"
          type="text"
        />
        <button className="border-2 border-black w-[500px] p-2 m-4 rounded-lg font-bold text-2xl text-emerald-950">
          Submit
        </button>
      </form>
    </div>
  );
}
