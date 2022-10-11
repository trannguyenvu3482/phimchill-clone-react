import React, { useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import CardFilm from './CardFilm';

const HomeFilmSlider = ({ title, small, big, movies, ...props }) => {
  const sliderRef = useRef();

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
      </Header>
      <PrevBtn onClick={(e) => sliderRef.current.slickPrev()}>
        <FaPlay />
      </PrevBtn>
      <FilmSwiper {...sliderSettings} ref={sliderRef}>
        {movies.map((movie) => {
          return <CardFilm key={movie.id} movieInfo={movie}></CardFilm>;
        })}
      </FilmSwiper>
      <NextBtn onClick={(e) => sliderRef.current.slickNext()}>
        <FaPlay />
      </NextBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 40px;
`;

const Header = styled.div`
  font-size: 17px;
  color: #ff8a00;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const FilmSwiper = styled(Slider)``;

const Title = styled.h2``;

const PrevBtn = styled.button`
  position: absolute;
  top: 52%;
  left: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;

  & > svg {
    color: rgb(255, 150, 1);
    opacity: 0.5;
    font-size: 35px;
    transition: all 0.1s ease-in-out;
    transform: rotate3d(0, 0, 1, 180deg);
  }

  &:hover {
    & > svg {
      opacity: 0.8;
    }
  }
`;

const NextBtn = styled.button`
  position: absolute;
  top: 52%;
  right: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;

  & > svg {
    color: rgb(255, 150, 1);
    opacity: 0.5;
    font-size: 35px;
    transition: all 0.1s ease-in-out;
  }

  &:hover {
    & > svg {
      opacity: 0.8;
    }
  }
`;

export default HomeFilmSlider;
