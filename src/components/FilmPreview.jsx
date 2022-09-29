import React from 'react';
import { FaPlayCircle, FaRegPlayCircle, FaYoutube } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const FilmPreview = ({ ...props }) => {
  // Get params from url with useParams hook
  const navigate = useNavigate();
  const { movieId } = useParams();
  const handleNavigate = () => {
    navigate(`/xem/${movieId}`);
  };

  return (
    <Wrapper>
      <PlayIcon onClick={handleNavigate}>
        <FaPlayCircle />
      </PlayIcon>
      <FilmInfo>
        <PreviewImage>
          <img
            src="https://img.phimmoichills.net/images/film/minions-ngoai-truyen-phan-1.jpg"
            alt=""
          />
        </PreviewImage>
        <PreviewInfo>
          <FilmTitle>Minions Ngoại Truyện (Phần 1)</FilmTitle>
          <FilmDesc>Minions & More Volume 1 (2022)</FilmDesc>
          <Buttons>
            <ButtonTrailer href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <FaYoutube />
              Trailer
            </ButtonTrailer>
            <ButtonWatch to={'/xem/' + movieId}>
              <FaRegPlayCircle />
              Xem phim
            </ButtonWatch>
          </Buttons>
        </PreviewInfo>
      </FilmInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 490px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('https://chill-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https%3A%2F%2Fi0.wp.com%2Fimg.phimmoichills.net%2Fimages%2Finfo%2Fminions-more-volume-1.jpg')
      no-repeat center center;
  background-size: cover;
  overflow: hidden;
`;

const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  transition: all 0.5s ease-in-out;
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 1;

  & > svg {
    color: rgba(255, 0, 0, 0.8);
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.4);
  }
`;

const FilmInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  height: 150px;
`;

const PreviewImage = styled.div`
  width: 250px;
  height: 100%;
  overflow: hidden;
  margin-right: 8px;
  border: 1px solid #fff;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PreviewInfo = styled.div`
  width: calc(100% - 250px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 8px;
`;

const FilmTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 8px;
`;

const FilmDesc = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 8px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ButtonTrailer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 34px;
  background-color: #5bc0de;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-right: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  & > svg {
    margin-right: 3px;
  }

  &:hover {
    background-color: #31b0d5;
  }
`;
const ButtonWatch = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 34px;
  background-color: #d9534f;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-right: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  & > svg {
    margin-right: 3px;
  }

  &:hover {
    background-color: #c9302c;
  }
`;

export default FilmPreview;
