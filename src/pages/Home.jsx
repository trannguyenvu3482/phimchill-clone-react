import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  tagsPhimBo,
  tagsPhimChieuRap,
  tagsPhimLe,
  tagsPhimThinhHanh,
} from '../common/homeTags';
import { HomeBigBlockFilm, HomeFilmSlider } from '../components';
import { getUpcomingMovies } from '../services/upComingMoviesService';

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const { results } = await getUpcomingMovies({});
      setUpcomingMovies((prevMovies) => [...prevMovies, ...results]);
    };

    fetchUpcomingMovies();
  }, []);

  return (
    <Wrapper>
      <Container>
        <HomeFilmSlider title={'Phim đề cử'} movies={upcomingMovies} />
        <HomeBigBlockFilm
          title="Phim lẻ mới cập nhật"
          to="phim-le"
          tags={tagsPhimLe}
          movies={upcomingMovies}
        />
        <HomeBigBlockFilm
          title="Phim chiếu rạp"
          to="phim-chieu-rap"
          tags={tagsPhimChieuRap}
          movies={upcomingMovies}
        />
        <HomeBigBlockFilm
          title="Phim bộ mới cập nhật"
          to="phim-bo"
          tags={tagsPhimBo}
          movies={upcomingMovies}
        />
        <HomeBigBlockFilm
          title="Phim thịnh hành"
          to="phim-thinh-hanh"
          tags={tagsPhimThinhHanh}
          rows={2}
          movies={upcomingMovies.slice(0, 7)}
        />
        <HomeBigBlockFilm
          title="Phim sắp chiếu"
          to="phim-sap-chieu"
          tags={[]}
          rows={2}
          movies={upcomingMovies.slice(0, 7)}
        />
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

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export default Home;
