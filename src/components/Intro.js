import React from 'react';

const Intro = () => {
  return (
    <>
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
      <div className="HeartContainer" style={{ display: "flex", justifyContent: "center"}} >
        <img
          src="https://revmmm.files.wordpress.com/2020/05/wordart.jpeg"
          alt="WordCloud Art - Heart"
          style={{
            maxWidth: "80%",
            maxHeight: "auto",
          }}
        />
      </div>
      <div
              className="actions"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <a href="/sermons" className="button">
                Sermons
              </a>
              <a href="/bible_stories" className="button">
                Bible Stories
              </a>
              <a href="/blog-posts" className="button">
                Messages
              </a>
              <a
                href="https://stpetersfrankfort.org/the-key"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Key
              </a>
            </div>
    </>
  )
}

export default Intro;