/*

Q-1: 
<div id='parent'>
    <div id='child'>
        <h1>Hello I am nested Component</1h>
    </div>
</div>

Q-2: 
<div id='parent'>
    <div id='child'>
        <h1>Hello I am nested Component</h1>
        <h2>Hello I am nested Component</h2>
    </div>
</div>


Q-3: 
<div id='parent'>
    <div id='child1'>
        <h1>Hello I am nested Component</h1>
        <h2>Hello I am nested Component</h2>
    </div>
    <div id='child2'>
        <h1>Hello I am nested Component</h1>
        <h2>Hello I am nested Component</h2>
    </div>
</div>


*/

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am nested Component"),
      React.createElement("h2", {}, "I am second sibling"),
      React.createElement("h1", {}, "I am nested Component"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am nested Component"),
      React.createElement("h2", {}, "I am second sibling"),
      React.createElement("h1", {}, "I am nested Component"),
    ])]
  );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React"
// );

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
