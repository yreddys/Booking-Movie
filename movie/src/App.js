// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import CancelTicket from "./components/CancelTicket";
import DownloadTicket from "./components/DownloadTicket";
import BookingHomePage from "./components/BookingHomePage"; // New component
import MovieDetailsPage from "./components/MovieDetailsPage"; // New component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-movies" element={<BookingHomePage />} /> {/* New route */}
        <Route path="/book-movie/:movieId" element={<MovieDetailsPage />} /> {/* Dynamic route */}
        <Route path="/cancel-ticket" element={<CancelTicket />} />
        <Route path="/download-ticket" element={<DownloadTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
