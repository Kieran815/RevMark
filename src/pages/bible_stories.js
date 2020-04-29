import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data }) => {
  const videos = data.allYoutubeVideo.edges
  console.log(videos)
  return (
    <Layout>
      <div id="main">
        {videos.map(video => (
          <section key={video.node.id}>
            <h2>{video.node.title}</h2>
            <iframe
              className="yt_videos"
              title={video.node.title}
              width="560"
              height="315"
              src={'https://www.youtube.com/embed/' + `${video.node.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.node.description}</p>
          </section>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allYoutubeVideo {
      edges {
        node {
          id
          title
          description
          videoId
          publishedAt
        }
      }
    }
  }
`
