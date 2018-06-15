import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'

export default class CollectionItem extends React.Component {

  render() {
    return(
      <div className={`collection-item-wrap ${this.props.wrapperClasses}`}>
        {this.props.children}
      </div>
    );
  }
}