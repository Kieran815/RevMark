import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data }) => {
  const posts = data.allWordpressPost.nodes
  return (
    <Layout>
      <div id="main">
        <header className="major">
          <h1>Sermon Archive</h1>
        </header>
        <section id="two">
          <p>
            View sermons from prior sundays. The bulletins for each sermon are
            linked below the video, for your convenience.
          </p>
          <hr />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '1em',
            }}
          >
            {posts.map((post, index) => (
              <a href={post.slug} key={index} style={{ minWidth: '80%' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <h2
                    key={index}
                    className="button"
                    style={{
                      textDecoration: 'underline',
                      color: 'gray',
                      textAlign: 'center',
                    }}
                  >
                    {post.title}
                  </h2>
                </div>
              </a>
            ))}
          </div>
          <hr />
          {/* ******************** End of YouTube Videos ******************** */}
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
    allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "Sermons" } } } }
    ) {
      nodes {
        title
        slug
        date
      }
    }
  }
`
