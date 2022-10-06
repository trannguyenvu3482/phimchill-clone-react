import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardFilm } from '../components';

const HomeBigBlockFilm = (props = {}) => {
  const { title, tags, to, movies, rows = 3 } = props;

  return (
    <Wrapper>
      <Header>
        <LeftHeader>
          <Title>{title}</Title>
          <Tags>
            {tags.map((tag, index) => {
              return (
                <Tag key={index} to={tag.link}>
                  {tag.name}
                </Tag>
              );
            })}
          </Tags>
        </LeftHeader>
        <RightHeader>
          <WatchButton to={'/list/' + to}>
            Xem tất cả <FaPlay />
          </WatchButton>
        </RightHeader>
      </Header>
      <FilmWrapper rows={rows}>
        <CardFilm big movieInfo={movies !== undefined && movies[0]} />
        {movies?.slice(1, 12).map((movie) => {
          return <CardFilm key={movie.id} movieInfo={movie}></CardFilm>;
        })}
      </FilmWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  margin-top: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  // Media query on mobile
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightHeader = styled.div``;

const Title = styled.h2`
  text-transform: uppercase;
  color: #ff8a00;
  margin-right: 60px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    margin-top: 20px;
    gap: 1px;
  }
`;

const Tag = styled(Link)`
  display: block;
  background-color: #504d49;
  color: #fff;
  padding: 5px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #ff8a00;
  }

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const WatchButton = styled(Link)`
  display: block;
  background-color: #504d49;
  color: #fff;
  padding: 5px;
  text-decoration: none;
  font-size: 14px;

  & > svg {
    margin-left: 5px;
    font-size: 10px;
  }

  &:hover {
    color: #ff8a00;
  }
`;

const FilmWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
  grid-gap: 10px;
  margin-top: 10px;
  overflow: hidden;

  & > *:first-child {
    grid-column: span 2;
    grid-row: span 2;
    /* width: 100%; */
    /* height: 100%; */
  }

  // Media query on mobile
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;

export default HomeBigBlockFilm;
