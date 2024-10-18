// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import BookMovies from "./components/BookMovies";
import CancelTicket from "./components/CancelTicket";
import DownloadTicket from "./components/DownloadTicket";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-movies" element={<BookMovies />} />
        <Route path="/cancel-ticket" element={<CancelTicket />} />
        <Route path="/download-ticket" element={<DownloadTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
