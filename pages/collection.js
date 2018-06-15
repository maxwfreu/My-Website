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
            <div className="intro-content col-sm-5">
              <CollectionItem wrapperClasses="loading-animation-wrap">
                <div className="loading-animation">
                  <span class="one"></span>
                </div>
              </CollectionItem>
            </div>
            <div className="intro-content col-sm-5 offset-sm-2">
            <CollectionItem wrapperClasses="cube-animation-wrap">
              <section class="container">
                <div id="cube">
                  <figure class="front"></figure>
                  <figure class="back"></figure>
                  <figure class="right"></figure>
                  <figure class="left"></figure>
                  <figure class="top"></figure>
                  <figure class="bottom"></figure>
                </div>
              </section>
            </CollectionItem>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Collection.propTypes = {
  page: PropTypes.number.isRequired,
}