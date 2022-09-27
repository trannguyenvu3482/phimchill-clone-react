import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'tippy.js/dist/tippy.css';
import LogoPMC from '../../../assets/images/LogoPhimMoiChill.png';
import listRoutes from './HeaderRoutes';

const Header = () => {
  const [search, setSearch] = useState('');
  let navigate = useNavigate();

  const handleSearch = (e) => {
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

  return (
    <Wrapper>
      <Logo to="/">
        <img src={LogoPMC} alt="" />
      </Logo>
      <ListRoutes>
        {listRoutes.map((route, index) => {
          return (
            <li key={index}>
              {/* <Link to={route.path}>{route.name}</Link> */}

              {!!route.submenu === true ? (
                <Tippy
                  // visible={true}
                  delay={[0, 0]}
                  placement="bottom"
                  interactive={true}
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
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </Search>
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
  padding: 12px;

  img {
    width: 150px;
    height: 40px;
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
