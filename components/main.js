import React, { Component} from 'react';
import Head from './head';

export default class Main extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="flex-body">
        {this.props.children}
      </div>
    );
  }
}
