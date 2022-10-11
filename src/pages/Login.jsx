import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import {
  auth,
  facebookProvider,
  googleProvider,
  signInWithPopup,
} from '../configs/firebase';
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from '../features/user/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error('Vui lòng điền vào tất cả các trường');
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(
          setUserLoginDetails({
            name: user.user.displayName,
            email: user.user.email,
            photo: user.user.photoURL,
          })
        );
        navigate('/home');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const { user } = await signInWithPopup(auth, facebookProvider);
      console.log(user);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        navigate('/home');
      }
    });
  }, [userName]);

  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>Đăng nhập</Title>
          <Form>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Đăng nhập</Button>
          </Form>

          <SocialLogins>
            <button
              type="button"
              className="facebook-login"
              onClick={handleFacebookLogin}
            >
              <FaFacebookF />
              <span>Đăng nhập với Facebook</span>
            </button>
            <button
              type="button"
              className="google-login"
              onClick={handleGoogleLogin}
            >
              <FaGoogle />
              <span>Đăng nhập với Google</span>
            </button>
          </SocialLogins>

          <Footer>
            Lần đầu đến PhimMoiChill? <Link to="/register">Đăng ký</Link>
          </Footer>
        </Content>
      </Container>
      <ToastContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url('../images/LandingPageBackground.jpg');
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

const Button = styled.button`
  width: 320px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #e50914;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #f40612;
  }
`;

const SocialLogins = styled.div`
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

export default Login;
