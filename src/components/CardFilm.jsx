import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CardFilm = ({ big = false, movieInfo = {}, ...props }) => {
  const navigate = useNavigate();

  const handleMovie = () => {
    navigate(`/info/${movieInfo.id}`);
  };

  return (
    <Wrapper onClick={handleMovie} big={big}>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movieInfo?.backdrop_path}?language=vi`}
        alt="image"
      />
      <Content>
        <Title>{movieInfo?.title}</Title>
      </Content>
      <Tag big={big}>HD-Vietsub</Tag>
      <PlayIcon>
        <FaPlayCircle />
      </PlayIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  /* width: 255px; */
  width: ${(props) => (props.big === true ? '100%' : '255px')};
  /* height: 145px; */
  height: ${(props) => (props.big === true ? '100%' : '145px')};
  background-color: #fff;
  /* background: url('https://img.phimmoichills.net/images/film/chien-binh-cuoi-cung-coi-nguon-cua-quy.jpg')
    no-repeat center center / cover; */
  overflow: hidden;
  transition: background-size 0.3s ease-in-out;

  &:hover {
    cursor: pointer;

    // Scale up the background-image
    background-size: 120%;

    & > img {
      transform: scale(1.2);
    }

    & > div:last-child {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 0;
  width: 100%;
  padding: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Title = styled.span`
  font-size: 16px;
  color: #fff;
`;

const Tag = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  /* padding: 4px 8px; */
  padding: ${(props) => (props.big === true ? '10px 8px' : '4px 8px')};
  /* background-color: #ff0000; */
  background-size: 200% 100%;
  background-image: linear-gradient(
    to right,
    #c02425 0%,
    #f0cb35 51%,
    #c02425 100%
  );
  color: #fff;
  /* font-size: 12px; */
  font-size: ${(props) => (props.big === true ? '14px' : '12px')};
  border-radius: 3px;

  // Add a triangle to the bottom center of the tag
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #ff0000;
  }
`;

const PlayIcon = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 49px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;
  width: 49px;
  height: 49px;
  transition: all 0.3s ease-in-out;
  transform: translate(-50%, -50%) scale(1.2);

  & > svg {
    color: rgba(255, 0, 0, 0.8);
  }
`;

const Image = styled.img`
  position: absolute;
  inset: 0px;
  display: block;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: all 0.3s ease-in-out;
  width: 100%;
  z-index: 0;
  top: 0;
`;
export default CardFilm;
