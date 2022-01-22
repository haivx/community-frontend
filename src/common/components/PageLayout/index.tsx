import { Helmet } from 'react-helmet'
import TopBar from './TopBar'
import { Wrapper, Container } from './style'

const PageLayout = ({ children, title }: any) => (
  <Wrapper>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <TopBar />
    <Container>
      <div>{children}</div>
    </Container>
  </Wrapper>
)

export default PageLayout
