import React, { useEffect, useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import ReactStars from 'react-rating-stars-component';
import styled from 'styled-components';

const FilmInfoDescriptions = ({ details, ...props }) => {
  const [stars, setStars] = useState(10);
  const [filmInfo, setFilmInfo] = useState({});

  useEffect(() => {
    setFilmInfo(details);
  }, [details]);

  const handleRatingChange = (stars) => {
    setStars(stars);
  };

  return (
    <Wrapper>
      <DescContainer>
        <FilmInfo>
          <Ratings>
            <ReactStars
              count={10}
              emptyIcon={<BsStar />}
              fullIcon={<BsStarFill />}
              size={22}
              value={stars}
              color="#fff"
              activeColor={'#ffd700'}
              onChange={handleRatingChange}
              classNames="stars"
            />
            <RatingsCount>
              ({Math.floor(filmInfo.vote_average)} đ / {filmInfo.vote_count}{' '}
              lượt)
            </RatingsCount>
          </Ratings>
          <FilmInfoItems>
            <FilmInfoColumn>
              <FilmInfoItem>
                <Title>Đang phát</Title>
                {': '}
                <Values>
                  <Value>HD Vietsub</Value>
                </Values>
              </FilmInfoItem>
              <FilmInfoItem>
                <Title>Thể loại</Title>
                {': '}
                {filmInfo.genres?.map((genre) => {
                  return (
                    <Values key={genre.id}>
                      <Value>{genre.name}</Value>
                    </Values>
                  );
                }) || null}
              </FilmInfoItem>
            </FilmInfoColumn>

            <FilmInfoColumn>
              <FilmInfoItem>
                <Title>Năm Phát Hành</Title>
                {': '}
                <Values>
                  <Value>{filmInfo.release_date?.slice(0, 4)}</Value>
                </Values>
              </FilmInfoItem>
              <FilmInfoItem>
                <Title>Nhà sản xuất</Title>
                {':'}
                {filmInfo.production_companies
                  ?.map((company) => {
                    return (
                      <Values key={company.id}>
                        <Value>{company.name}</Value>
                      </Values>
                    );
                  })
                  ?.slice(0, 2) || null}
              </FilmInfoItem>
            </FilmInfoColumn>
            <FilmInfoColumn>
              <FilmInfoItem>
                <Title>Quốc gia</Title>
                {': '}
                {filmInfo.production_countries
                  ?.map((country, index) => {
                    return (
                      <Values key={index}>
                        <Value>{country.name}</Value>
                      </Values>
                    );
                  })
                  ?.slice(0, 2) || null}
              </FilmInfoItem>
              <FilmInfoItem>
                <Title>Số lần công chiếu</Title>
                {': '}
                <ImdbScore>{filmInfo.runtime}</ImdbScore>
              </FilmInfoItem>
            </FilmInfoColumn>
          </FilmInfoItems>
        </FilmInfo>
        <FilmDescription>
          <FilmDescTitle>Nội dung phim {filmInfo.title}</FilmDescTitle>
          <FilmDescInfo>
            {filmInfo.overview || 'Hiện phim chưa có nội dung'}
          </FilmDescInfo>
        </FilmDescription>
        <FilmTags>
          <FilmTagTitle>Thẻ</FilmTagTitle>
          <FilmTagList>
            {filmInfo.genres?.map((genre) => {
              return <FilmTagItem key={genre.id}>{genre.name}</FilmTagItem>;
            }) || null}
          </FilmTagList>
        </FilmTags>
      </DescContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  background-color: #252525;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const FilmInfo = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #3a3a3a;
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 15px;

  .stars {
    margin-top: -2px;
    margin-right: 8px;
    display: flex;
    align-items: center;

    & > span {
      margin-right: 2px;
    }
  }
`;

const RatingsCount = styled.div`
  color: #fff;
  font-size: 14px;
`;

const FilmInfoItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  /* background-color: red; */
`;

const FilmInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  height: 100%;
`;

const FilmInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
  color: #fff;
  font-size: 13px;
  flex-wrap: wrap;
  line-height: 1.5;
`;

const Title = styled.span`
  font-weight: 600;
`;

const Values = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 3px;
  color: #828282;
`;

const Value = styled.span`
  margin-right: 5px;

  &:hover {
    color: #ff8a00;
    cursor: pointer;
    font-weight: bold;
  }
`;

const ImdbScore = styled.span`
  background-color: #ff8a00;
  padding: 2px;
  color: black;
  font-weight: bold;
  border-radius: 3px;
`;

const FilmDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-bottom: 1px solid #3a3a3a;
`;

const FilmDescTitle = styled.h4`
  color: #ff9601;
`;

const FilmDescInfo = styled.span`
  color: #828282;
  font-size: 14px;
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FilmTags = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-bottom: 1px solid #3a3a3a;
`;

const FilmTagTitle = styled.h4`
  color: #ff9601;
`;

const FilmTagList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0;
`;

const FilmTagItem = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #3a3a3a;
  border-radius: 3px;
  color: #828282;
  font-size: 13px;
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    background-color: #ff9601;
    color: #fff;
  }
`;

export default FilmInfoDescriptions;
