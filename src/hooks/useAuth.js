import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../view/Login';

const useAuth = () => {
  const isLogin = useSelector(state => state.login.isLogin);
  const auth = component => {
    console.log(isLogin);
    if (isLogin) {
      return component;
    } else {
      return React.createElement(Login, { name: '/login' });
    }
  };
  return { auth };
};

export default useAuth;
