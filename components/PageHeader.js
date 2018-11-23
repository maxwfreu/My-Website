import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'

export default class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageStyle: '',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        pageStyle: `page-${this.props.page}`,
      });
    }, 100);
  }

  render() {
    return(
      <div className="intro-wrap">
        <div className="intro-row">
          <img src="../static/images/me.jpg" alt="Me"/>
          <div className="intro-content">
            <h1> My name is Max Freundlich </h1>
            <p> Stanford University, 2017 </p>
            <p> I like making things </p>
          </div>
        </div>
      </div>
    );
  }
}
/*
  <div className="page-navigation">
    <Link prefetch href="/">
      <a>Home</a>
    </Link>
    <Link prefetch href="/collection">
      <a>Random CSS</a>
    </Link>
  </div>
  */
PageHeader.propTypes = {
  page: PropTypes.number,
}

PageHeader.defaultProps = {
  page: '',
}