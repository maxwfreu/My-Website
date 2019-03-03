import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import '../static/styles/index.scss';

export default class Home extends React.Component {
  render() {
    return(
      <div className="v2-wrapper">
        <div className="v2-above-the-fold">
          <h1> Max Freundlich </h1>
          <h2> Full Stack Developer </h2>
          <div className="v2-social">
            <a href="https://github.com/maxwfreu" target="_blank" aria-label="Github" rel="noopener noreferrer">
              <img src="/static/images/github.png" alt="github"/>
            </a>
            <a href="mailto:maxwfreu@alumni.stanford.edu" aria-label="Email" className="email">
              <img src="/static/images/email-card.png" alt="email"/>
            </a>
          </div>
          <div className="photo-cred">
            Photo By <a href="https://www.rosalindphotography.com/" target="_blank" aria-label="Github" rel="noopener noreferrer">Rosalind Lutsky</a>
          </div>
        </div>
        <div className="v2-content">
          <div className="v2-section">
            <h2>About Me</h2>
            <div className="v2-about-me">
              <img src="/static/images/me.jpg" alt="Max Freundlich"/>
              <p>
                I’m a Software Engineer based in San Francisco. 
              </p>
              <p>
                In my free time, I like to take on projects that let me experiment with new frameworks and technologies. 
              </p>
              <p>
                When I’m not coding, I enjoy playing board games, drinking coffee, and watching movies.
              </p>
            </div>
          </div>
          <div className="v2-section">
            <h2>Projects</h2>
            <div className="v2-project with-img">
              <div className="v2-project-description-img">
                <img src="https://cdn.scrumptioustab.com/assets/scrumptious-screenshot.png" alt="Scrumptious Kanban Board"/>
              </div>
              <div className="v2-project-description">
                <h3> Scrumptious </h3>
                <h6 className="stack"> Stack: React, Redux, Webpack, Cloudflare, S3, Flask </h6>
                <br/>
                <p>
                  A kanban board for your new tab.
                </p>
                <p>
                  Replace your new tab with a personal dashboard visualizing your tasks and progress on projects or personal to-do lists.
                  All without opening another app.
                </p>
                <br/>
                <a href="https://www.scrumptioustab.com" target="_blank" rel="noopener noreferrer">Check it out</a>
              </div>
            </div>

            <div className="v2-project">
              <div className="v2-project-description">
                <h3> Hacker News Hiring </h3>
                <h6 className="stack"> Stack: Next.js, Python </h6>
                <br/>
                <p>
                  This is a website I built to visualize and query job listings in the monthly Who’s Hiring? posts on Hacker News. I built this as an excuse to work with rendering large lists with React
                </p>
                <br/>
                <a href="https://hackernewshiring.com" target="_blank" rel="noopener noreferrer">Check it out</a>
              </div>
              <div className="v2-project-description-img">
                <img src="https://cdn.scrumptioustab.com/assets/hacker-news-hiring.png" alt="Hacker News Hiring" />
              </div>
            </div>
          </div>
          <div className="v2-section">
            <h2>Articles</h2>
            <div className="v2-articles">
              <a href="https://medium.com/@mfreundlich1/building-a-website-with-next-js-netlify-2ca007c75933" target="_blank" rel="noopener noreferrer">Building a website with Next.js + Netlify</a>
              <p>
                After making a few webites with Next.js and Netlify, I put this article together to help out other people who ventured down this path.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
