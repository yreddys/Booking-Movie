// src/components/MovieDetailsPage.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams(); // Get the movie ID from the URL
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    seats: 1,
  });

  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", bookingDetails);
    // Add API call here to submit booking details
  };

  return (
    <div>
      <h1>Booking Details for Movie ID: {movieId}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={bookingDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={bookingDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Number of Seats:</label>
          <input
            type="number"
            name="seats"
            value={bookingDetails.seats}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default MovieDetailsPage;
