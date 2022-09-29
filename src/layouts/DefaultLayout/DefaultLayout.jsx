import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1a1a1a;
`;

const Container = styled.div``;

export default DefaultLayout;
