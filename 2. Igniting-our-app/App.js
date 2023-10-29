import React from "react";
import ReactDOM from 'react-dom/client'

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [React.createElement("div", { id: "child1" }, [
//       React.createElement("h1", {}, "I am nested Component"),
//       React.createElement("h2", {}, "I am second sibling"),
//       React.createElement("h1", {}, "I am nested Component"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", {}, "I am nested Component"),
//       React.createElement("h2", {}, "I am second sibling"),
//       React.createElement("h1", {}, "I am nested Component"),
//     ])]
//   );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

const App = () => {
  return (
    <>
      <div id="parent">
        <div id="child1">
          <h1>
            Hello I am React Project With Parcel
          </h1>
        </div>
        <div id="child2">
          <h1>
            Hello I am React Project With Parcel
          </h1>
        </div>
      </div>
    </>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);


