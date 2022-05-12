import styled from '@emotion/styled'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    form {
        margin: 40px;
        width: 1200px;
    }
  > div {
    display: flex;
    justify-content: center;
  }
  #editorjs {
    margin-top: 20px auto;
    background: #ffff;
    max-width: 800px;
  }
`

export const HeaderWrapper = styled.div`
    text-align: center;
    margin: 20px auto;
    font-size: 1.2rem;
    font-weight: bold;
`

export const BtnActionWrap = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin-right: 8px;
    width: 120px;
  }
`