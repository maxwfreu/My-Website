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
      <div className={`intro-wrap ${this.state.pageStyle}`}>
        <div className="intro-row container">
          <div className="intro-image">
            <img src="../static/images/me.jpg" alt="Me"/>
          </div>
          <div className="intro-content">
            <h1> My name is Max Freundlich </h1>
            <p> I like making things </p>
            <Link prefetch href="/">
              <a>Home</a>
            </Link>
            <Link prefetch href="/about">
              <a>About</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

PageHeader.propTypes = {
  page: PropTypes.number,
}

PageHeader.defaultProps = {
  page: '',
}