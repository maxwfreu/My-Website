import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import PageHeader from '../components/PageHeader';

export default class Home extends React.Component {
  render() {
    return(
      <div className="wrapper main-wrapper">
        <div className="main-content">
          <h2> Max Freundlich </h2>
          <p className="no-margin">Software Engineer</p>
          <p>Stanford | 2017</p>
          <div className="main-inner">
            <h1> Projects </h1>
            <a href="https://www.scrumptioustab.com" target="_blank" rel="noopener noreferrer">Scrumptious</a>
            <a href="http://hackernewshiring.com" target="_blank" rel="noopener noreferrer">Hacker News Hiring</a>
            <a href="https://pngtowebp.com/" target="_blank" rel="noopener noreferrer">PNG to WebP</a>
            <a href="https://watchitwednesday.com" target="_blank" rel="noopener noreferrer">Movies to watch on a Wednesday</a>
            <a href="https://github.com/maxwfreu/Next-Video-Chat" target="_blank" rel="noopener noreferrer">Next Video Chat</a>
            <p>This website!</p>
            <h1> Articles </h1>
            <a href="https://medium.com/@mfreundlich1/building-a-website-with-next-js-netlify-2ca007c75933" target="_blank" rel="noopener noreferrer">Building a website with Next.js + Netlify</a>
          </div>
        </div>
      </div>
    )
  }
}


Home.propTypes = {
  page: PropTypes.number.isRequired,
}