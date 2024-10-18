import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Import movie images from the assets folder
import gameOfThronesImage from "../assets/gameofthrones.jpeg";
import avatarImage from "../assets/avatar.jpeg";
import vikingsImage from "../assets/vikings.jpeg";

const movies = [
  { id: 1, title: "Game of Thrones", image: gameOfThronesImage },
  { id: 2, title: "Avatar", image: avatarImage },
  { id: 3, title: "Vikings", image: vikingsImage },
];

const BookingHomePage = () => {
  const navigate = useNavigate();
  const movieContainerRef = useRef(null);

  // Auto-scroll the movie container every 3 seconds
  useEffect(() => {
    const scrollMovies = () => {
      if (movieContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = movieContainerRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;

        // If we have reached the end, scroll back to the beginning
        if (scrollLeft >= maxScrollLeft) {
          movieContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          movieContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    };

    const scrollInterval = setInterval(scrollMovies, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  // Handle booking when clicking the book button
  const handleBookClick = (movieId) => {
    navigate(`/book-movie/${movieId}`); // Route to the booking details page
  };

  return (
    <PageWrapper>
      <h1>Latest Movies</h1>
      <MoviesContainer ref={movieContainerRef}>
        {movies.map((movie) => (
          <MovieCard key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <BookButton onClick={() => handleBookClick(movie.id)}>
              Book Now
            </BookButton>
          </MovieCard>
        ))}
      </MoviesContainer>
    </PageWrapper>
  );
};

// Styled Components
const PageWrapper = styled.div`
  padding: 20px;
`;

const MoviesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 20px;
  gap: 20px;

  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MovieCard = styled.div`
  flex: 0 0 300px;
  margin: 10px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

const BookButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #ff4500;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ff6347;
  }
`;

export default BookingHomePage;
