import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const TopBarWrapper = styled.div`
  display: flex;
  padding: 15px 0;
  margin: auto;
  justify-content: space-between;
  max-width: calc(800px - (30px * 2));
`
const LineWrapper = styled.div`
  box-shadow: 0 5px 20px -10px #000;
  border-bottom: 1px solid #e8e8e8;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 10;
`
const LogoWrapper = styled.div`
  font-size: 25px;
`
const MenuWrapper = styled.div`
  a {
    margin-right: 20px;
    cursor: pointer;
  }
`

const TopBar = () => {
  return (
    <LineWrapper>
      <TopBarWrapper>
        <LogoWrapper>
          <Link to="/" className="nav-link">
            Liam Vo
          </Link>
        </LogoWrapper>
        <MenuWrapper>
          <a href="#section">Project</a>
          <a href="http">Blog</a>
          {/* <a href="#section" >Project</a>
          <a href="#section" >BlockChain</a>
          <a href="#section" >Web development</a>
          <a href="#section" >Resources</a> */}
        </MenuWrapper>
      </TopBarWrapper>
    </LineWrapper>
  )
}

export default TopBar
