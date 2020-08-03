import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data }) => {
  const videos = data.allYoutubeVideo.edges
  console.log(videos)
  return (
    <Layout>
      <div id="main">
        <header className="major" style ={{display: 'flex', justifyContent: 'space-between' }}>
          <h1>Bible Stories for Kids</h1>
          <a
            href="https://www.youtube.com/channel/UCSc6ebNSxRFrbenT97g6u4Q"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon fa-youtube icon-5x"> Subscribe</span> 
          </a>
        </header>
        {videos.map(video => (
          <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }} key={video.node.id}>
            <h2>{video.node.title}</h2>
            <iframe
              className="yt_videos"
              title={video.node.title}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.node.videoId}`}
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
    allYoutubeVideo(
      sort: { fields: publishedAt, order: DESC }
      filter: { id: { nin: "ad861fc1-f1a3-52fa-b715-bdee0daffadd" } }
    ) {
      edges {
        node {
          id
          title
          description
          videoId
        }
      }
    }
  }
`
