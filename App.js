import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading" className="h1">
    Hello World from JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>Hello World from Fucntional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
