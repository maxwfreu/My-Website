import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import PageHeader from '../components/PageHeader';

export default class Home extends React.Component {
  render() {
    return(
      <div className="wrapper main-wrapper">
        <Particles
          className="particles"
          params={{
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#000000"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.1,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.01,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#000000",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 0.3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
        }} />
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