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
        <br />
        <p>
          Through my work with some startup and outsource company, I’ve helped my team where I worked for building and maintaining rich and
          interactive user interfaces application.
        </p>
        <br />
        <p>
          I spend a lot of time learning about FrontEnd. But I also feel good with blockchain technology. I'm learning and building a website for NTF
          market place(solidity, smart contract, meta mask,...).
        </p>
        <br />
        <p>NodeJS is my main point.</p>
        <br />
        <p>
          <b>
            Not like most of young people today, drinking tea is one of my hobbies. I enjoy the smell of the tea, the distinctive flavor and
            tea ceremony. Oolong Tea, Black Tea, Green Tea,...but with me, Plain Black tea is the best.
          </b>
        </p>
      </Information>
    </Header>
  </div>
)

export default HomePage
