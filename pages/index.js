import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import PageHeader from '../components/PageHeader';

export default class Home extends React.Component {
  render() {
    return(
      <div className="v2-wrapper">
        <div className="v2-above-the-fold">
          <h1> Max Freundlich </h1>
          <h2> Full Stack Developer </h2>
          <div className="v2-social">
            <img src="/static/images/github.png" />
            <img src="/static/images/email-card.png" />
          </div>
        </div>
        <div className="v2-content">
          <div className="v2-section">
            <h2>About Me</h2>
            <div className="v2-about-me">
              <img src="/static/images/me.jpg" />
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
            <div className="v2-content-left">
              <div className="v2-project-description-img">
                <img src="/static/images/scrumptious-screenshot.png" />
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
          </div>
        </div>
      </div>
    )
  }
}


// export default class Home extends React.Component {
//   render() {
//     return(
//       <div className="wrapper main-wrapper">
//         <div className="main-content">
//           <h2> Max Freundlich </h2>
//           <p className="no-margin">Software Engineer</p>
//           <p>Stanford | 2017</p>
//           <div className="main-inner">
//             <h1> Projects </h1>
//             <a href="https://www.scrumptioustab.com" target="_blank" rel="noopener noreferrer">Scrumptious</a>
//             <a href="http://hackernewshiring.com" target="_blank" rel="noopener noreferrer">Hacker News Hiring</a>
//             <a href="https://watchitwednesday.com" target="_blank" rel="noopener noreferrer">Movies to watch on a Wednesday</a>
//             <a href="https://github.com/maxwfreu/Next-Video-Chat" target="_blank" rel="noopener noreferrer">Next Video Chat</a>
//             <p>This website!</p>
//             <h1> Articles </h1>
//             <a href="https://medium.com/@mfreundlich1/building-a-website-with-next-js-netlify-2ca007c75933" target="_blank" rel="noopener noreferrer">Building a website with Next.js + Netlify</a>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


// Home.propTypes = {
//   page: PropTypes.number.isRequired,
// }