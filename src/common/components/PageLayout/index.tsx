import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
import { routes } from '@constants/routes'
import TopBar from './TopBar'
import { Wrapper, Container } from './style'

const PageLayout = ({ children, title }: any) => {
  const location = useLocation()
  return (
    <Wrapper>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {location.pathname !== routes.SIGNIN ? (
        <>
          <TopBar />
          <Container>
            <div>{children}</div>
          </Container>
        </>
      ) : (
        <div>{children}</div>
      )}
    </Wrapper>
  )
}

export default PageLayout
