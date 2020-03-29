import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://www.facebook.com/Revmmm"
                className="icon fa-facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCSc6ebNSxRFrbenT97g6u4Q"
                className="icon fa-youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Youtube</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/milliganmark/?hl=en"
                className="icon fa-instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mark-milligan-71878728/"
                className="icon fa-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/stpetersrev"
                className="icon fa-twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:stpetersrevmmm@gmail.com"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
