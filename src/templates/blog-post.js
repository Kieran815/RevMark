import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data }) => {
  const post = data.wordpressPost
  return (
    <Layout>
      <div id="main">
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div id="btnDiv" style={{ display: 'flex', justifyContent: 'center' }}>
          <a
            href="/blog-posts"
            className="button"
            style={{
              maxWidth: '15vw',
            }}
          >
            Back to Messages
          </a>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      date(formatString: "DD MMMM YYYY")
      content
    }
  }
`
