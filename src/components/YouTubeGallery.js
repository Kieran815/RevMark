import React from "react";
import { graphql } from 'gatsby'
import Gallery from "./Gallery";

export default ({ data }) => {
  const videos = data.allYoutubeVideo.nodes;
  return (
    <Gallery
      content={videos.map(
        ({ id, title, thumbnail: source, description }) => ({
          id,
          title,
          source,
          description
        })
      )}
    />
  )
}

export const query = graphql`
  query {
    allYoutubeVideo {
      nodes {
        id
        title
        thumbnail {
          url
        }
        description
        videoId
      }
    }
  }
`
