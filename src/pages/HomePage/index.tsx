import { Link } from 'react-router-dom'
import { Wrapper, Information } from './styles'

const HomePage = () => (
    <Wrapper>
      <Information>
          No content here. But dont be worry.<br />
          I have plan B. <br />Just relax and read some articles in  <Link to='/blog' className='nav-link'>blog</Link> screen first.
      </Information>
    </Wrapper>
)

export default HomePage
