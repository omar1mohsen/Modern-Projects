import React from "react";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
function App() {
  const home = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider router={home} />
    </>
  );
}

export default App;
