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
          <div className="intro-content">
            <h2> Max Freundlich </h2>
            <p> Software Engineer </p>
            <p> Stanford University, 2017 </p>
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