import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import PageHeader from '../components/PageHeader';

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <PageHeader page={this.props.page} />
        <div className="container intro-things">
          <div className="row">
            <div className="intro-content col-sm-12">
              <h1> About me </h1>
              <p> {`I've seen every episode of futurama, most of them twice. Currently, I am working as a Software Engineer at FormSwift.`}</p>
              <p> I graduated with a BS in Computer Science from Stanford University in 2017 </p>
            </div>
          </div>
        </div>
        <div className="container intro-things">
          <div className="row">
            <div className="intro-content col-sm-12">
              <h1> Some things I have done </h1>
              <ul>
                <li>
                  <a href="https://watchitwednesday.com" target="_blank" rel="noopener noreferrer">Movies to watch on a Wednesday</a>
                  <p>This is a website where I share my most mediocre movie suggestions. Movies that are perfect for a day where youre exausted, need some form of entertainment, but can't be bothered to find anything good. In other words, a Wednesday. I built this with Next.js and Netlify.</p>
                </li>
                <li>
                  <a href="https://github.com/maxwfreu/Next-Video-Chat" target="_blank" rel="noopener noreferrer">Next Video Chat</a>
                  <p> This is a video chat app built with Next.js, Socket.io, and WebRTC. This was a ton of fun to make as I had no experience with Socket.io or WebRTC - luckily there were some great resources from the open source community that I could learn from. It is still very much a work in progress - to get this to work fully I will need to spin up my own TURN server. </p>
                </li>
                <li>
                  <p>Crypto Tax Report <strong>Temporarily took this site down due to some GDPR issues, but it will be back soon!</strong></p>
                  <p> Myself and three of my friends built this site to help people calculate their capital gains on their crypto trades.</p>
                </li>
                <li>
                  <p>This website!</p>
                  <p> {`I built this site to familiarize myself with some of the tooling we used for Crypto Tax Report. This is my side-side project for when I am too exausted for my side projects.`}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


Home.propTypes = {
  page: PropTypes.number.isRequired,
}