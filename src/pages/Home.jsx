import React from 'react';
import styled from 'styled-components';
import { HomeFilmSlider } from '../components';

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <HomeFilmSlider />
        <HomeFilmSlider />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #fff;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 0 80px;
`;

export default Home;
