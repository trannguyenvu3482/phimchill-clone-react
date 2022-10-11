import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'tippy.js/dist/tippy.css';
import LogoPMC from '../../../assets/images/LogoPhimMoiChill.png';

const Header = () => {
  return (
    <Wrapper>
      <Logo to="/">
        <img src={LogoPMC} alt="" />
      </Logo>

      <User>
        <LoginBtn to="/login">Đăng nhập</LoginBtn>
        <RegisterBtn to="/register">Đăng ký</RegisterBtn>
      </User>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 60px;
  background-color: #121212;
  color: #fff;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled(Link)`
  padding: 24px;

  img {
    width: 60px;
    height: 50px;
  }
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBtn = styled(Link)`
  display: block;
  padding: 5px 10px;
  border: 1px solid #fff;
  border-radius: 0px;
  background-color: transparent;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  margin-right: 10px;
  transition: all 0.3s;

  &:hover {
    background-color: #ff0000;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RegisterBtn = styled(Link)`
  display: block;
  padding: 5px 10px;
  border: 1px solid #fff;
  border-radius: 0px;
  background-color: transparent;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  margin-right: 10px;
  transition: all 0.3s;

  &:hover {
    background-color: #ff0000;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
