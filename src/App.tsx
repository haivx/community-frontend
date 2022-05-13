import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { routes } from './constants/index'
import { BlogPage, Dashboard, HomePage, LoginPage, NotFoundPage } from './pages'
import { PublicRouter, PrivateRouter } from './AuthRouters'
import CreatePost from '@pages/CreatePost'
import PreviewPost from '@pages/PreviewPost'

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
      <Route
        path={routes.BLOG}
        element={
          <PublicRouter title="Blog Page">
            <BlogPage />
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
      <Route
        path={routes.CREATE_POST}
        element={
          <PrivateRouter>
            <CreatePost />
          </PrivateRouter>
        }
      />
      <Route
        path={routes.PREVIEW_POST}
        element={
          <PrivateRouter>
            <PreviewPost />
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
