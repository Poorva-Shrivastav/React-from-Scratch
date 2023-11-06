import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1" }, "I'm from h1 tag"),
    React.createElement("h2", { id: "h2" }, "I'm from h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "I'm from h1 tag"),
    React.createElement("h2", { id: "h2" }, "I'm from h2 tag"),
  ]),
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
