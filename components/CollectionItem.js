import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Highlight from 'react-highlight'

export default class CollectionItem extends React.Component {
  render() {
    return(
      <div className="collection-col flip-container">
        <div className="flipper">
            <div className="intro-content front">
              <div className={`collection-item-wrap ${this.props.wrapperClasses}`}>
                {this.props.children}
              </div>
            </div>
            <div className="intro-content back">
              <div className="collection-item-wrap snippet">
                <Highlight language="scss">
                  {this.props.loadingSnippet()}
                </Highlight>
              </div>
            </div>
        </div>
      </div>
    );
  }
}