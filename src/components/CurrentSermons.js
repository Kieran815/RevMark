import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

class CurrentSermons extends React.Component {
  render() {
    return (
      <div>
        <h2>Featured Sermons and Messages</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '1em',
          }}
        >
          <section>
            <h3 style={{ display: 'flex', justifyContent: 'flex-start' }}>
              This Week's Sermon
            </h3>
            <iframe
              className="yt_videos"
              title="Sermon 2020/09/06"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OLNzV77kDe0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <a
              href="https://revmmm.files.wordpress.com/2020/09/9-6-bulletin.pdf"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginBottom: '0.5em',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Bulletin: Sunday, September 6th
            </a>
          </section>
          <br />
          <StaticQuery
            query={graphql`
              query MyQuery {
                youtubeVideo {
                  id
                  title
                  videoId
                  description
                }
              }
            `}
            render={(data) => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginBottom: '1em',
                }}
              >
                <section>
                  <h3
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                    }}
                  >
                    This Week's Bible Story
                  </h3>
                  <iframe
                    className="yt_videos"
                    title={data.youtubeVideo.title}
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${data.youtubeVideo.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </section>
              </div>
            )}
          />
          <div
            className="actions"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <a
              href="https://www.youtube.com/channel/UCSc6ebNSxRFrbenT97g6u4Q"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginBottom: '1.5em' }}
            >
              Subscribe to my YouTube Channel
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentSermons
