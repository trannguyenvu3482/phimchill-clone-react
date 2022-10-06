import React from 'react';
import styled from 'styled-components';
import BlankHeader from '../components/Header/BlankHeader';

const BlankNavbarLayout = ({ children }) => {
  return (
    <Wrapper>
      <BlankHeader />
      <Container>{children}</Container>
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

export default BlankNavbarLayout;
