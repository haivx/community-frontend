import styled from '@emotion/styled'

const TopBarWrapper = styled.div`
  display: flex;
  padding: 15px 0;
  margin: auto;
  justify-content: space-between;
  max-width: calc(800px - (30px * 2));
`
const LineWrapper = styled.div`
  border-bottom: 1px solid #e8e8e8;
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
        <LogoWrapper>Liam Vo</LogoWrapper>
        <MenuWrapper>
          <a href="#section" >Project</a>
          <a href="#section" >BlockChain</a>
          <a href="#section" >Web development</a>
          <a href="#section" >Resources</a>
        </MenuWrapper>
      </TopBarWrapper>
    </LineWrapper>
  )
}

export default TopBar
