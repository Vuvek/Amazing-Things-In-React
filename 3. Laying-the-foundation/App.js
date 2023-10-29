import React, { useState } from "react";
import ReactDOM from "react-dom/client";

//----------**************** React Elements *****************-------------------//

// React.createElement => ReactElement - JS Object => HTMLElement(Render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "React Element Using React 🚀 "
);

// JSX - Babel Transpiled to React.createElement => ReactElement - JS Object => HTMLElement(Render)
const elem = <span>I am React Element</span>;
const JsxHeading = (
  <div id="heading" className="head">
    React Element Using JSX 🚀{" "}
    {elem}
    <App />
    {heading}
  </div>
);

//---------**************** React Component ******************--------------------//

function App() {
  return (
    <>
      {/* {JsxHeading} */}
      <h1>Hello Functional Component</h1>
    </>
  );
}

console.log(App());

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(JsxHeading);
