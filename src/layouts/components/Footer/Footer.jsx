import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PMCLogo from '../../../assets/images/LogoPhimMoiChill.png';
import footerLinks from '../../../common/footerLinks';

const Footer = () => {
  return (
    <Wrapper>
      <Logo>
        <a href="https://facebook.com/DuzFromSOL">
          <img src={PMCLogo} alt="logo" />
        </a>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
    width: 100px;
    height: 80px;
  }
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
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

export default Footer;
