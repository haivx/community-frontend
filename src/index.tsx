import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Global as GlobalStyle, ThemeProvider } from '@emotion/react';

import App from './App';
import { ToastContainer } from 'react-toastify';
import { globalStyle, theme } from './styles';
import reportWebVitals from './reportWebVitals';
import { fakeAuthProvider } from './auth';

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  isLoggedIn: boolean;
}


export const AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      setIsLoggedIn(true);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout, isLoggedIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle styles={globalStyle} />
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <App />
        <ToastContainer />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
