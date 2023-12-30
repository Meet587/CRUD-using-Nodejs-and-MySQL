import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./index.css";
import Books from "./pages/Books.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* 👈 Renders at /app/ */}
        <Route path="/books" element={<Books />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
