import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data }) => {
  const post = data.wordpressPost
  return (
    <Layout>
      <div id="main">
        <h2>{post.title}</h2>
        <div
          id="two"
          style={{ textAlign: 'center', padding: '1.5em' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div id="btnDiv" style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="/sermons" className="button">
            Back to Sermon Archive
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
      content
    }
  }
`
