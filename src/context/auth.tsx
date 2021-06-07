// contexts/auth.js

import Cookies from 'js-cookie';
import Router from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';
//api here is an axios instance which has the baseURL set according to the env.
import api from '../services/api';
import BaseHttpService from '../services/base-http.service';

interface IAppContext {
  user: any;
  handleSetUser: (object: any) => void;
  loading: boolean;
  onLoading: () => void;
  offLoading: () => void;
}

const defaultAppContextValue: IAppContext = {
  user: null,
  handleSetUser: (_object: any) => {},
  loading: true,
  onLoading: () => {},
  offLoading: () => {},
};

const AuthContext = createContext<IAppContext>(defaultAppContextValue);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handleSetUser = (object: any) => setUser(object);
  const [loading, setLoading] = useState(true);
  const onLoading = () => setLoading(true);
  const offLoading = () => setLoading(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSetUser,
        loading,
        onLoading,
        offLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const ProtectRoute = ({ children }) => {
  // if (
  //   loading ||
  //   (!isAuthenticated && window.location.pathname !== '/auth/sign-in')
  // ) {
  //   // return <LoadingScreen />;
  //   return <h1> LoadingScreen | LoadingScreen</h1>;
  // }
  return children;
};
