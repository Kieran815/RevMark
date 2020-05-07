import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'
import { Helmet } from 'react-helmet';

class Template extends React.Component {
  render() {
    const { children } = this.props

    const siteTitle = "Rev. Mark M Milligan"
    const siteDescription = "Profile and Blog of Rev Mark Michael Milligan, Teacher and Pastor"
    return (
      <div>
        <Header />
        <Helmet>
                <title>{siteTitle}</title>
                <meta name="description" content={siteDescription} />
        </Helmet>
        {children}
      </div>
    )
  }
}

export default Template
