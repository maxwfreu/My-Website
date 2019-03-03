import React, { Component} from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="flex-body">
        {this.props.children}
      </div>
    );
  }
}
