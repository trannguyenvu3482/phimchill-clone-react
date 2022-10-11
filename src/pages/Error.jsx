import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <Container>
        <h1>404</h1>
        <h2>Trang bạn cố tìm không tồn tại</h2>
        <Button to="/">Quay lại trang chủ</Button>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: url('../images/LandingPageBackground.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: calc(100vh - 50px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -50px;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 400px;
  height: 400px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 100px;
  }

  h2 {
    color: #fff;
    font-size: 20px;
  }
`;

const Button = styled(Link)`
  background-color: #e28604;
  color: #fff;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export default Error;
