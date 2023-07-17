const heading = React.createElement("div", {}, [
  React.createElement("div", {}, [
    React.createElement("h1", {}, "h1 from child 1"),
    React.createElement("h1", {}, "h1 from child 2"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "h1 from child 1"),
    React.createElement("h1", {}, "h1 from child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
