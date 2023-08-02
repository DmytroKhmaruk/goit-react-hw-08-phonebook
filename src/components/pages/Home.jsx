import React from 'react';
import { HomeStyled, LinkStyled, LogLinks } from './HomeStyled';

export const Home = () => {
  return (
    <HomeStyled>
      <h2>Welcome!</h2>
      <LogLinks>
        <LinkStyled to="/register">Get Started</LinkStyled>
        <LinkStyled to="/login">Sign in</LinkStyled>
      </LogLinks>
    </HomeStyled>
  );
};

export default Home;
