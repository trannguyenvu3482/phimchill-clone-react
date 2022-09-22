import React from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    alert('Register');
  };

  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>Đăng ký</Title>
          <Form>
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Mật khẩu" />
            <Button onClick={handleRegister}>Đăng ký</Button>
          </Form>

          <SocialRegister>
            <button className="facebook-login">
              <FaFacebookF />
              <span>Đăng ký với Facebook</span>
            </button>
            <button className="google-login">
              <FaGoogle />
              <span>Đăng ký với Google</span>
            </button>
          </SocialRegister>

          <Footer>
            Bạn đã là thành viên? <Link to="/login">Đăng nhập</Link>
          </Footer>
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: url('https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/e5b7469b-7098-4e7b-9830-6075c65a9d97/VN-en-20220919-popsignuptwoweeks-perspective_alpha_website_large.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 400px;
  height: 400px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 10px;
  outline: none;
`;

const SocialRegister = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  .google-login,
  .facebook-login {
    width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    padding: 5px;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .google-login {
    background: #db4437;
    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }

  .facebook-login {
    background: #3b5998;
    margin-bottom: 10px;
    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }

  span {
    margin-left: 5px;
    text-align: center;
  }
`;

const Button = styled.button`
  width: 320px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #e50914;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  color: #fff;
  padding-left: 80px;
  & > a {
    color: red;
    text-decoration: none;
    margin-left: 5px;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Register;
