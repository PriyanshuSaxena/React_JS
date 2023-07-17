{
  /* <div>
  <div>
    <h1>h1 from child 1</h1>
    <h1>h1 from child 2</h1>
  </div>
  <div>
    <h2>h2 from child 1</h2>
  </div>
</div>; */
}

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
