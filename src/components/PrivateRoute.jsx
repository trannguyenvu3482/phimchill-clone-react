import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserName } from '../features/user/userSlice';

const PrivateRoute = ({ children }) => {
  const userName = useSelector(selectUserName);

  return userName ? children : <Navigate to="/" />;
};

export default PrivateRoute;
