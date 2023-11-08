import React from "react";
import ReactDOM from "react-dom/client";

//JSX - HTML-LIKE syntax , not HTML inside JS

// const jsxHeading = (
//   <h1 id="heading" className="heading">
//     I'm not HTML inside JS😡. I'm HTML-Like syntax
//   </h1>
// );

const elem = <p>I'm an element present inside other element 🤓</p>;

const variableTitle = <h1>I'm a variable being injected in jsx. {elem}</h1>;

// Component Composition - calling a component inside another component

const Title = () => <h1>I'm Title Component</h1>;
const Heading = () => (
  <>
    <h1>I Come from Heading</h1>
    <p>Below Titles are same thing, written differently</p>
    <Title />
    {Title()}
    <Title></Title>
    {variableTitle}
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<Heading />); // Babel understands <></>, so we have to wrap our component inside them for rendering
