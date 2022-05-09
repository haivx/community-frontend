import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { routes } from './constants/index'
import { Dashboard, HomePage, LoginPage, NotFoundPage } from './pages'
import { PublicRouter, PrivateRouter } from './AuthRouters'

const Router = () => {
  return (
    <Routes>
      {/* Public router */}
      <Route
        path={routes.HOMEPAGE}
        element={
          <PublicRouter title="Home Page">
            <HomePage />
          </PublicRouter>
        }
      />
      <Route
        path={routes.SIGNIN}
        element={
          <PublicRouter title="Sign in">
            <LoginPage />
          </PublicRouter>
        }
      />
      <Route
        path={routes.NOTFOUND}
        element={
          <PublicRouter title="Not Found">
            <NotFoundPage />
          </PublicRouter>
        }
      />
      {/* Private router */}
      <Route
        path={routes.ADMIN}
        element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        }
      />
      <Route
        path={routes.PRIVATE}
        element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        }
      />
      <Route path="*" element={<Navigate to={routes.NOTFOUND} replace />} />
    </Routes>
  )
}

export const App: React.FC = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

export default App
