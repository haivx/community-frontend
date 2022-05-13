import 'antd/dist/antd.less'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'
import { Global as GlobalStyle, ThemeProvider } from '@emotion/react'

import { AuthProvider } from '@store/auth-context'
import { PostContextProvider } from '@store/post-context'

import App from './App'
import { globalStyle, theme } from './styles'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle styles={globalStyle} />
    <AuthProvider>
      <PostContextProvider>
        <ThemeProvider theme={theme}>
            <App />
          <ToastContainer autoClose={3000} />
        </ThemeProvider>
      </PostContextProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
