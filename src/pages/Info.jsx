import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Breadcrumb,
  FilmInfoDescriptions,
  FilmPreview,
  HomeFilmSlider,
} from '../components';

const Info = () => {
  return (
    <Wrapper>
      <Container>
        <Breadcrumb movieName={'Minions'} />
        <FilmPreview />
        <FilmInfoDescriptions />
        <Sliders>
          <HomeFilmSlider title={'Có thể bạn cũng muốn xem'} />
          <HomeFilmSlider title={'Phim đề cử mới'} />
        </Sliders>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  margin: 0 250px;
  margin-top: 80px;
`;

const Sliders = styled.div``;

export default Info;
