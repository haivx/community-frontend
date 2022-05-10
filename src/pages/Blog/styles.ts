import styled from '@emotion/styled'

export const ArticleWrapper = styled.article`
  cursor: pointer;
  display: flex;
  margin: 20px auto;
  img {
    width: 300px;
    height: 200px;
    margin: 20px;
    object-fit: cover;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 20px;
    h2 {
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
  &:hover {
    border-bottom: 1px solid transparent;
    box-shadow: 0 3px 15px rgb(0 0 0 / 20%);
  }
`

export const SectionWrapper = styled.section`
  > h2 {
    margin-bottom: 10px;
    color: #2371ff;
    font-weight: bold;
  }
`
