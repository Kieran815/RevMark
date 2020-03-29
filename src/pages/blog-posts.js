import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data }) => {
  const posts = data.allWordpressPost.nodes
  return (
    <Layout>
      <div id="main">
        <section id="messageHead">
          <header
            className="major"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <h1>Messages from Rev. Mark</h1>
          </header>
        </section>
        <section id="postList">
          {posts.map((post, index) => (
            <a href={post.slug} key={index} className="postIntro">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <h2
                  dangerouslySetInnerHTML={{ __html: post.title }}
                  key={index}
                  style={{ textDecoration: 'underline' }}
                />
                <sub style={{ color: 'grey' }}>{post.date}</sub>
              </div>
              <div style={{ color: 'black', marginBottom: '3em' }}>
                {post.excerpt.replace(/(<([^>]+)>)/gi, '')}
              </div>
            </a>
          ))}
        </section>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <a href="/" className="button">
            Back to Home
          </a>
        </div>
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
