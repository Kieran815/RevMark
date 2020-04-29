import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Layout from '../components/Layout';


const BibleStories = props => {
  return (
    <Layout>
      <div>
        <StaticQuery
          query={graphql`
            query {
              allYoutubeVideo {
                edges {
                  node {
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
            }
          `}
          render={data => (
            <section>
              {data.allYoutubeVideo.edges.id}
            </section>
          )}
        />
      </div>
    </Layout>
  );
};

export default BibleStories;
