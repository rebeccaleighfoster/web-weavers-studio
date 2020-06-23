import React from "react";
import ListAllProjects from "../components/projects/ListAllProjects"
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ListAllProjects />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
