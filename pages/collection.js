import React from 'react';
import Link from 'next/link'
import PageHeader from '../components/PageHeader';
import PropTypes from 'prop-types';
import CollectionItem from '../components/CollectionItem';

export default class Collection extends React.Component {
  render() {
    return(
      <div>
        <PageHeader page={this.props.page} />
        <div className="container intro-things">
          <h1>Some Random CSS</h1>
          <p> This is just a collection of random animations I've made in my downtime </p>
          <div className="row">
              <CollectionItem wrapperClasses="loading-animation-wrap" loadingSnippet={loadingCodeSnippet}>
                <div className="loading-animation">
                  <span className="one"></span>
                </div>
              </CollectionItem>
            <CollectionItem wrapperClasses="cube-animation-wrap" loadingSnippet={cubeCodeSnippet}>
              <section className="container">
                <div id="cube">
                  <figure className="front"></figure>
                  <figure className="back"></figure>
                  <figure className="right"></figure>
                  <figure className="left"></figure>
                  <figure className="top"></figure>
                  <figure className="bottom"></figure>
                </div>
              </section>
            </CollectionItem>
          </div>
        </div>
      </div>
    )
  }
}

Collection.propTypes = {
  page: PropTypes.number.isRequired,
}

const loadingCodeSnippet = () => (`
  .loading-animation-wrap {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  .loading-animation {
    display: inline-flex;

    span.one {
      margin: 0 auto;
      display: inline;
      box-shadow: 0 0 10px gray;
      height: 80px;
      width: 80px;
      border-radius: 50%;
      display: inline-block;
      animation: myanimation 2s infinite;
    }
  }


  // KeyFrame Animation

  @keyframes myanimation {
    0% {
       background: orange;
    }
    50% {
       background-color: white;
      background-image: url(#{var(--img-path)});
       transform: rotateZ(90deg) rotateX(180deg)  rotateY(180deg);
    }
     100% {
       background: orange;
       transform: rotateZ(0) rotateX(0)  rotateY(0);
    }
  }`
);

const cubeCodeSnippet = () => (`
  .cube-animation-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {    
      #cube figure {
        height: 96px;
        width: 96px;
      }
    }

    .container {
      position: relative;
      perspective: 1000px;
      width: 100px;
      height: 100px;
      padding: 0;
    }

    #cube {
      width: 100%;
      height: 100%;
      position: absolute;
      transform-style: preserve-3d;
      transform: translateZ( -50px );
      animation: rotate 10s infinite;
      
      figure {
        display: block;
        position: absolute;
        width: 100px;
        height: 100px;
        margin: 0;
        display: block;
        position: absolute;
        border: 2px solid black;
        transition:
          height 1s ease-in-out,
          width 1s ease-in-out;
      
        &.front {
          transform: rotateY(   0deg ) translateZ( 50px);
          background-color: rgba(255, 0, 0, .5);
        }
        &.back {
          transform: rotateX( 180deg ) translateZ( 50px );
          background-color: rgba(255, 165, 0, .5);
        }
        
        &.right {
          transform: rotateY( 90deg ) translateZ( 50px );
          background-color: rgba(255, 255, 0, .5);
        }
        
         &.left {
          transform: rotateY( -90deg ) translateZ( 50px );
          background-color: rgba(238,130,238, .5);
        }
        
        &.top {
          transform: rotateX( 90deg ) translateZ( 50px );
          background-color: rgba(0, 128, 0, .5);
        }
        
        &.bottom {
          transform: rotateX( -90deg ) translateZ( 50px );
          background-color: rgba(0, 0, 255, .5);
        }
      }
    }
  }
  
  @keyframes rotate {
    16.6666% {
      transform: translateZ( -100px ) rotateY(    0deg );
    }
    33.33333% {
      transform: translateZ( -100px ) rotateX( -180deg );
    }
    50% {
      transform: translateZ( -100px ) rotateY(  -90deg );
    }
    66.6666% {
      transform: translateZ( -100px ) rotateY(   90deg ); 
    }
    83.33333% {
      transform: translateZ( -100px ) rotateX(  -90deg );
    }
    100% {
      transform: translateZ( -100px ) rotateX(   90deg );
    }
  }
`)