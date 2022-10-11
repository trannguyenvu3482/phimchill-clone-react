import Tippy from '@tippyjs/react/headless';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import 'tippy.js/dist/tippy.css';
import LogoPMC from '../../../assets/images/LogoPhimMoiChill.png';
import listRoutes from '../../../common/HeaderRoutes';
import { auth } from '../../../configs/firebase';
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState
} from '../../../features/user/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (search === '') {
      alert(
        'Bạn chưa nhập từ khóa. (Không tính các ký tự đặc biệt vào độ dài từ khóa)'
      );
      return;
    }

    navigate(`/tim-kiem/${search}`);

    setSearch('');
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setSignOutState());
        navigate('/');
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <Wrapper>
      <Logo to="/">
        <img src={LogoPMC} alt="" />
      </Logo>
      {userName && (
        <>
          <ListRoutes>
            {listRoutes.map((route, index) => {
              return (
                <li key={index}>
                  {/* <Link to={route.path}>{route.name}</Link> */}

                  {Boolean(route.submenu) === true ? (
                    <Tippy
                      delay={[0, 0]}
                      placement="bottom"
                      interactive
                      render={() => {
                        return (
                          <Submenu>
                            <div className="column column-1">
                              {route.submenu[0].map((item, index) => {
                                return (
                                  <div key={index}>
                                    <Link to={item.path}>{item.name}</Link>
                                  </div>
                                );
                              })}
                            </div>
                            <div className="column column-2">
                              {route.submenu[1].map((item, index) => {
                                return (
                                  <div key={index}>
                                    <Link to={item.path}>{item.name}</Link>
                                  </div>
                                );
                              })}
                            </div>
                          </Submenu>
                        );
                      }}
                    >
                      <Link to={route.path}>{route.name}</Link>
                    </Tippy>
                  ) : (
                    <Link to={route.path}>{route.name}</Link>
                  )}
                </li>
              );
            })}
          </ListRoutes>
          <Search>
            <input
              type="text"
              placeholder="Tìm tên phim, diễn viên.."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyDown={handleEnter}
            />
            <button type="button" onClick={handleSearch}>
              <FaSearch />
            </button>
          </Search>
        </>
      )}
      {!userName ? (
        <Auth>
          <LoginBtn to="/login">Đăng nhập</LoginBtn>
          <RegisterBtn to="/register">Đăng ký</RegisterBtn>
        </Auth>
      ) : (
        <UserInfo>
          <UserImg src={userPhoto} alt={userName} />
          <Dropdown>
            <span onClick={handleLogout}>Đăng xuất</span>
          </Dropdown>
        </UserInfo>
      )}
      {userName && <ToastContainer />}
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

const ListRoutes = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;

  & > li {
    padding: 0 10px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &:hover > a {
      color: #ff0000;
    }

    & > a {
      display: block;
      color: #fff;
      text-decoration: none;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:last-child > a {
      color: #ff0000;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > input {
    width: 200px;
    height: 24px;
    padding: 5px;
    border: 1px solid #fff;
    border-radius: 0px;
    background-color: #121212;
    color: #fff;
    font-size: 14px;
    outline: none;

    &::placeholder {
      color: #fff;
    }
  }

  & > button {
    position: absolute;
    right: 6px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    & > svg {
      color: #fff;
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Submenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 300px;
  /* height: 100px; */
  background-color: #121212;
  color: #fff;
  padding: 10px;
  padding-bottom: 0;

  & > .column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;

    & > div {
      margin-bottom: 15px;

      & > a {
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        text-transform: capitalize;

        &:hover {
          color: #ff0000;
        }
      }
    }

    & > .column-1 {
    }

    & > .column-2 {
    }
  }
`;

const Auth = styled.div`
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

const UserImg = styled.img`
  height: 100%;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0, 0, 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  width: 100px;
  opacity: 0;

  span {
    letter-spacing: 1.5px;

    &:hover {
      color: #ff0000;
      cursor: pointer;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: pointer;
  height: 50px;
  width: 50px;
  margin-right: -75px;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    background-color: transparent;
    height: 20px;
    width: 45px;
    top: 40px;
    left: 0;
  }
`;

export default Header;
