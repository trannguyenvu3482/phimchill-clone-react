import React from 'react';
import styled from 'styled-components';
import { HomeBigBlockFilm, HomeFilmSlider } from '../components';

const Home = () => {
  const tagsPhimLe = [
    {
      name: 'Hành động',
      link: '/',
    },
    {
      name: 'Hoạt hình',
      link: '/',
    },
    {
      name: 'Kinh dị',
      link: '/',
    },
    {
      name: 'Hài hước',
      link: '/',
    },
  ];

  const tagsPhimBo = [
    {
      name: 'Hàn Quốc',
      link: '/',
    },
    {
      name: 'Trung Quốc',
      link: '/',
    },
    {
      name: 'Âu Mỹ',
      link: '/',
    },
    {
      name: 'Phim Bộ Full',
      link: '/',
    },
  ];

  const tagsPhimChieuRap = [
    {
      name: '2021',
      link: '/',
    },
    {
      name: '2020',
      link: '/',
    },
    {
      name: '2019',
      link: '/',
    },
    {
      name: '2018',
      link: '/',
    },
  ];

  const tagsPhimThinhHanh = [
    {
      name: 'Phim Lẻ Thịnh Hành',
      link: '/',
    },
    {
      name: 'Phim Bộ Thịnh Hành',
      link: '/',
    },
  ];

  return (
    <Wrapper>
      <Container>
        <HomeFilmSlider />
        <HomeBigBlockFilm
          title="Phim lẻ mới cập nhật"
          to="phim-le"
          tags={tagsPhimLe}
        />
        <HomeBigBlockFilm
          title="Phim chiếu rạp"
          to="phim-chieu-rap"
          tags={tagsPhimChieuRap}
        />
        <HomeBigBlockFilm
          title="Phim bộ mới cập nhật"
          to="phim-bo"
          tags={tagsPhimBo}
        />
        <HomeBigBlockFilm
          title="Phim thịnh hành"
          to="phim-thinh-hanh"
          tags={tagsPhimThinhHanh}
          rows={2}
        />
        <HomeBigBlockFilm
          title="Phim sắp chiếu"
          to="phim-sap-chieu"
          tags={[]}
          rows={2}
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
