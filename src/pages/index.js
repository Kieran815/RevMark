import React from 'react'
import Layout from '../components/Layout.js'
import Tag from '../components/Tag.js'
import Intro from '../components/Intro'
import CurrentSermons from '../components/CurrentSermons'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div id="main">
          <section id="one">
            <Intro />
          </section>

          <section id="two">
            <CurrentSermons />
          </section>

          <section id="three">
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
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0.25em',
                  }}
                >
                  <h3 className="icon fa-home">
                    <span className="label">home</span>
                  </h3>
                  <a href="https://www.google.com/maps/place/12+W+Sauk+Trail,+Frankfort,+IL+60423/@41.4955441,-87.8517159,17z/data=!3m1!4b1!4m5!3m4!1s0x880e13514f89b35f:0x8c248de2d21f98fd!8m2!3d41.4955401!4d-87.8495272">
                    12 West Sauk Trail
                    <br />
                    Frankfort, Il 60423
                    <br />
                    United States
                  </a>
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
          </section>
          <Tag />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
