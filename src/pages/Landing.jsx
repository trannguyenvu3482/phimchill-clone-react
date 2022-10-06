import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bgimg from '../assets/images/LandingPageBackground.jpg';
import DuzFilmLogo from '../assets/images/LogoPhimMoiChill.png';

const Landing = () => {
  return (
    <Wrapper>
      <Container>
        <CTA>
          <Logo src={DuzFilmLogo} alt="logo" />
          <SignUp to="/login">ĐĂNG NHẬP / ĐĂNG KÝ NGAY</SignUp>
          <Desc>
            Thưởng thức hàng ngàn bộ phim, chương trình truyền hình, anime,
            kịch, âm nhạc, chương trình truyền hình trực tuyến và nhiều nội dung
            khác trên nền tảng duy nhất. Đăng ký ngay để xem nội dung độc quyền.
            Không có phí đăng ký.
          </Desc>
        </CTA>
        <Background />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-height: calc(100vh - 70px);
`;

const Container = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CTA = styled.div`
  width: 100%;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  z-index: 2;
`;

const Background = styled.div`
  height: 100%;
  background-image: url('${bgimg}');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 12px;
`;

const SignUp = styled(Link)`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 17px 0;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #0483ee;
  }
`;

const Desc = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

export default Landing;
