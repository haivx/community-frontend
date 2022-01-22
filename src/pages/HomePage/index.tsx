import { Header, Information } from './styles'
import Avatar from '../../assets/avatar.jpeg'

const HomePage = () => (
  <div>
    <Header>
      <Information>
        <p>
          <img src={Avatar} alt="Pineapple" />
          I’m Liam Vo, a FrontEnd Developer. I'm working now at Hanoi, Vietnam.
        </p>
        <p>
          Through my work with some startup and outsource company, I’ve helped my team where I worked for building and maintaining rich and
          interactive user interfaces application.
        </p>
        <p>
          <b>
            Strong foundation in algorithms and problem solving. Solid understanding of system architectures, performance, and scalability.
          </b>
          
        </p>
        <p>That's what a Software engineer need to be and I'm on the way to achieve</p>
      </Information>
    </Header>
  </div>
)

export default HomePage
