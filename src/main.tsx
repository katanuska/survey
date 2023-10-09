import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { makeServer } from "./mockServer/server.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SurveyForm, { loadSurvey } from "./form/SurveyForm";

const environment = process.env.NODE_ENV;
if (environment !== "production") {
  makeServer({ environment });
}

//TODO: add error page
const routes = createBrowserRouter([
  {
    path: "/",
    element: <SurveyForm />,
    loader: loadSurvey,
  },
  {
    path: "/success",
    element: <div>Success!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
