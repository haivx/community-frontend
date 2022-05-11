import { ArticleWrapper, SectionWrapper } from './styles'

const Blog = () => (
  <SectionWrapper>
    <h2>RECENT ARTICLES</h2>
    <ArticleWrapper>
      <img alt="" src="https://www.robinwieruch.de/static/9c149b70558636c8b42b2920c55c2824/0f3a1/banner.jpg" />
      <div className="content">
        <header>
          <h2>React batching</h2>
        </header>
        <p>
          Batching in React describes the internal implementation detail of React which treats multiple state updates as one state update.
          The benefit: multiple state updates are batched as one state update and therefore trigger only one re-rendering of the component
          which improves the rendering performance especially for larger React applications. Let's…
        </p>
      </div>
    </ArticleWrapper>

    <ArticleWrapper>
      <img alt="" src="https://www.robinwieruch.de/static/9c149b70558636c8b42b2920c55c2824/0f3a1/banner.jpg" />
      <div className="content">
        <header>
          <h2>React batching</h2>
        </header>
        <p>
          Batching in React describes the internal implementation detail of React which treats multiple state updates as one state update.
          The benefit: multiple state updates are batched as one state update and therefore trigger only one re-rendering of the component
          which improves the rendering performance especially for larger React applications. Let's…
        </p>
      </div>
    </ArticleWrapper>
  </SectionWrapper>
)

export default Blog
