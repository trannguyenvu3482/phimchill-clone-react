import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Breadcrumb, FilmInfoDescriptions, FilmPreview } from '../components';
import { getMovieDetails } from '../services/movieDetailsService';

const Info = () => {
  const [details, setDetails] = useState({});
  const params = useParams();
  const { movieId } = params;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(movieId);
      setDetails(movieDetails);
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <Wrapper>
      <Container>
        <Announce>
          DuzFilm được xây dựng với mục đích cá nhân, không có mục đích thương
          mại!
        </Announce>
        <Breadcrumb movieName={details?.title} />
        <FilmPreview details={details} />
        <FilmInfoDescriptions details={details} />
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

const Announce = styled.div`
  background-color: #000;
  color: #dcdcdc;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #e28604;
`;

export default Info;
