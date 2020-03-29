import React from 'react'
import Layout from '../components/Layout.js'
import Gallery from '../components/Gallery'
// import { church } from "@fortawesome/free-solid-svg-icons"

import thumb01 from '../assets/images/thumbs/InTheGarden.jpg'
import thumb02 from '../assets/images/thumbs/GoodShepherd.jpg'
import thumb03 from '../assets/images/thumbs/Praying.jpg'
import thumb04 from '../assets/images/thumbs/WalkingOnWater.jpg'

import full01 from '../assets/images/fulls/InTheGarden.jpg'
import full02 from '../assets/images/fulls/GoodShepherd.jpg'
import full03 from '../assets/images/fulls/Praying.jpg'
import full04 from '../assets/images/fulls/WalkingOnWater.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'In The Garden',
    description: '',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'The Good Shepherd',
    description: '',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Praying',
    description: '',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Walking On Water',
    description: '',
  },
]

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div id="main">
          <section id="one">
            <header className="major">
              <h2>Growing Faith Through Compassion and Grateful Living</h2>
            </header>
            <p>
              Welcome to my website. The site has been created to provide links
              to my blog and YouTube page, places where I can share thoughts and
              musings about faith, practice, Scripture, current events, and how
              they are all interrelated.
            </p>
            <p>
              There is a place where you can contact me with questions,
              comments, or prayer requests. There will be thoughts and photos
              for inspiration, as well some humor to (hopefully) provide a laugh
              or a smile.
            </p>
            <p>
              The site will include links to other sites I often find useful,
              informative, and inspiring. I would invite you to explore my
              website, and please feel free to share any constructive
              suggestions on how it might be more beneficial.
            </p>
            <p>
              <a
                href="https://www.stpetersfrankfort.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                St. Peter's UCC
              </a>{' '}
              is a congregation of the{' '}
              <a
                href="https://www.ucc.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                United Church of Christ
              </a>
              , a part of the{' '}
              <a
                href="http://ilucc.org/illinois-conference/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Illinois Conference
              </a>
              .
            </p>
            <p>
              St. Peter's is also a member church of the{' '}
              <a
                href="https://www.charterforcompassion.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Charter for Compassion
              </a>
              , as well as the{' '}
              <a
                href="https://gratefulness.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Network for Greatful Living
              </a>
              .
            </p>
            <p>Blessings and Peace,</p>
            <p>
              Reverend Mark M Milligan
              <br />
              Pastor & Teacher
              <br />
              St. Peter's United Church of Christ
              <br />
              Frankfort, Il
            </p>
            <div
              className="actions"
              style={{ display: 'flex', justifyContent: 'space-around' }}
            >
              <a href="/blog-posts" className="button">
                Messages
              </a>
              <a
                href="https://stpetersfrankfort.org/the-key"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                St. Peter's The Key
              </a>
            </div>
          </section>

          <section id="two" style={{ maxWidth: '90vw', maxHeight: 'auto' }}>
            <h2>Sermons and Video Messages</h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '1em',
              }}
            >
              <section>
                <iframe
                  className="yt_videos"
                  title="Sermon, 20/03/29"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/fmY6QfOCbHk"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </section>
              <section>
                <iframe
                  className="yt_videos"
                  title="Intro Video"
                  width="560"
                  height="315"
                  maxWidth="90vw"
                  maxHeight="auto"
                  src="https://www.youtube.com/embed/B7r-ORVKg0M"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </section>
            </div>

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
            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />
          </section>

          <section id="three">
            <div>
              <div className="labeled-icons">
                <div
                  id="footer-section"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginBottom: '2em',
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <h3 className="icon fa-home">
                      <span className="label">home</span>
                    </h3>
                    <p style={{ marginBottom: '0.5em' }}>
                      12 West Sauk Trail
                      <br />
                      Frankfort, Il 60423
                      <br />
                      United States
                    </p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    <a href="tel: 815-469-2220">(815) 469-2220</a>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:stpetersrevmmm@gmail.com">
                      stpetersrevmmm@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
