import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/originals/RevMarkPic.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="/" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <div>
              <strong>Rev. Mark M Milligan</strong>
            </div>
            Pastor and Teacher
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
