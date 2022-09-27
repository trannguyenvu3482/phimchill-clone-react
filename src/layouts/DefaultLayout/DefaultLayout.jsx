import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PMCLogo from '../../assets/images/LogoPhimMoiChill.png';
import footerLinks from '../../common/footerLinks';
import Header from '../components/Header/Header';

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
      <Footer>
        <Logo>
          <img src={PMCLogo} alt="logo" />
        </Logo>
        {footerLinks.map((item, index) => {
          return (
            <FooterItem key={index}>
              <Title>{item.title}</Title>
              <Links>
                {item.links.map((link, index) => {
                  return (
                    <LinkItem key={index} to={link.link}>
                      {link.name}
                    </LinkItem>
                  );
                })}
              </Links>
            </FooterItem>
          );
        })}
      </Footer>
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

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 100px;
  background-color: #000;
  height: 260px;
  margin-top: 50px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  img {
    width: 185px;
    height: 46px;
  }
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h4`
  color: #fff;
  font-size: 16px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const LinkItem = styled(Link)`
  color: rgb(102, 102, 102);
  font-size: 14px;
  margin-bottom: 14px;
  text-decoration: none;

  &:hover {
    color: #ff8a00;
  }
`;

export default DefaultLayout;
