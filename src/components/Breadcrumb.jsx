import React from 'react';
import { BsHouseFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Breadcrumb = ({ movieName, ...props }) => {
  return (
    <Wrapper>
      <Title>
        <BreadcrumbLink to="/">
          <BsHouseFill /> Xem phim
        </BreadcrumbLink>
      </Title>
      {'>'}
      <MovieBreadcrumb>
        <BreadcrumbLink>{movieName}</BreadcrumbLink>
      </MovieBreadcrumb>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 20px;
  background-color: #252525;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  color: #ff9601;
`;

const Title = styled.div`
  font-size: 14px;
  margin-right: 5px;
`;

const MovieBreadcrumb = styled.div`
  font-size: 14px;
  margin-left: 5px;
  & > a {
    color: #fff;
  }
`;

const BreadcrumbLink = styled(Link)`
  color: #ff9601;
  text-decoration: none;
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 5px;
  }
`;

export default Breadcrumb;
