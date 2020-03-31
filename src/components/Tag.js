import React from 'react'

const Tag = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <sub>
        <p>
          Created by
          <a href="/" rel="noopener noreferrer">
            K. Michael Milligan
          </a>
          ; Copyright 2020, Built using Gatsby;
        </p>
      </sub>
    </div>
  )
}

export default Tag
