import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { routes } from '@constants/routes'
import TopBar from './TopBar'
import { Wrapper, Container, PageWrapper } from './style'

const PageLayout = ({ children, title }: any) => {
  const location = useLocation()
  //@ts-ignore
  const helmet = <Helmet><title>{title}</title></Helmet>
  return (
    <Wrapper>
      {helmet}
      {location.pathname !== routes.SIGNIN ? (
        <PageWrapper>
          <TopBar />
          <Container>
            <div>{children}</div>
          </Container>
        </PageWrapper>
      ) : (
        <div>{children}</div>
      )}
    </Wrapper>
  )
}

export default PageLayout
