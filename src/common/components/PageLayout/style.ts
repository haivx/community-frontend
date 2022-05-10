import styled from '@emotion/styled'

export const Wrapper = styled.div``

export const Container = styled.div`
  display: flex;
  justify-content: center;
  > div {
    max-width: 960px;
    align-self: center;
    display: flex;
    flex-direction: column;
    margin: 50px;
  }
`
