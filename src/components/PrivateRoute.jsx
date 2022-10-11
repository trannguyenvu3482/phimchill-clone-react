import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { selectUserName } from '../features/user/userSlice';

const PrivateRoute = ({ children }) => {
  const userName = useSelector(selectUserName);

  return userName ? children : <Navigate to="/" />;
};

export default PrivateRoute;
