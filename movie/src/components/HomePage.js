import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/fantasy-background.webp"; 


const HomePage = () => {
  return (
    <PageWrapper>
      <Overlay>
        <NavBar>
          <NavItem href="/register">Register</NavItem>
          <NavItem href="/login">Login</NavItem>
          <NavItem href="/book-movies">Book Movies</NavItem>
          <NavItem href="/cancel-ticket">Cancel Ticket</NavItem>
          <NavItem href="/download-ticket">Download Ticket</NavItem>
        </NavBar>

        

        <MainContent>
          <Title>Fantasy Movie Booking Experience</Title>
          <Description>
            Choose your side and book your tickets for an epic adventure.
          </Description>
        </MainContent>

        <Sidebar>
          <Chatbot>Moviebot</Chatbot>
          <ComplaintSection>won tickets</ComplaintSection>
        </Sidebar>
      </Overlay>
    </PageWrapper>
  );
};

// Styled Components for layout and styling
const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const NavItem = styled.a`
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #ffd700;
  }
`;

const MainContent = styled.div`
  text-align: center;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 48px;
  margin: 20px;
`;

const Description = styled.p`
  font-size: 24px;
  margin: 20px;
`;

const Sidebar = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Chatbot = styled.button`
  background-color: #ff4500;
  color: #fff;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ff6347;
  }
`;

const ComplaintSection = styled.button`
  background-color: #4682b4;
  color: #fff;
  font-size: 18px;
  padding: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #5f9ea0;
  }
`;

const FantasyScene = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
`;

const AvatarImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 10%;
  width: 150px;
`;

const KingImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 10%;
  width: 150px;
`;

const DragonImage = styled.img`
  position: absolute;
  top: 10%;
  left: 40%;
  width: 200px;
`;

const DaemonImage = styled.img`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
`;

export default HomePage;
