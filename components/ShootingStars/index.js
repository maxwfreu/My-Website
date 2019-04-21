import React, { Component} from 'react';
import PropTypes from 'prop-types';
import ShootingStar from './ShootingStar';

export default class ShootingStars extends React.Component {
  render() {
    return (
      <div className={this.props.wrapperClass} style={{ position: 'relative' }}>
        <React.Fragment>
          <div className="shooting-star-wrapper">
            <ShootingStar />
          </div>
          {this.props.children}
        </React.Fragment>
      </div>
    );
  }
}

ShootingStars.defaultProps = {
  wrapperClass: '',
}

ShootingStars.propTypes = {
  wrapperClass: PropTypes.string,
}