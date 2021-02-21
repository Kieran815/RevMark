import React from 'react'
import Layout from '../components/Layout'

export default ({ data }) => {
  const posts = data.allWordpressPost.edges.node
  console.log(posts)
  return (
    <Layout>
      <div id="main">
        <header className="major">
          <h1>Sermons</h1>
        </header>
        <section id="two">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '1em',
            }}
          ></div>
          <div
            className="actions"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <a
              href="https://www.youtube.com/channel/UCwh08833xeuAZH6gUWmQyIg"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginBottom: '1.5em' }}
            >
              Subscribe to St. Peter's YouTube Channel
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressPost {
      nodes {
        title
        date(formatString: "YY-MM-DD")
        excerpt
        content
        slug
      }
    }
  }
`
