// src/components/BookMovies.js
import React, { useState } from "react";

const BookMovies = () => {
  const [movie, setMovie] = useState("");
  const [seats, setSeats] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie:", movie);
    console.log("Seats:", seats);
    // Replace with actual API call to book the movie and seats
  };

  return (
    <div>
      <h1>Book Movies</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Movie:</label>
          <input
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          />
        </div>
        <div>
          <label>Select Seats:</label>
          <input
            type="number"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
          />
        </div>
        <button type="submit">Book Movie</button>
      </form>
    </div>
  );
};

export default BookMovies;
