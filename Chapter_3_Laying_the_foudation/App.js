import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => {
  return <h1>Namaste React</h1>;
};

const MainComponent = () => {
  return (
    <div>
      {Title()}
      <Title />
      <Title></Title>
      <Normal />
    </div>
  );
};


const Normal = () => {
  <h1>using function keyword</h1>;
};

root.render(<MainComponent />);
