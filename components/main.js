import React, { Component} from 'react';
import Head from './head';
import Nav from './nav';
import stylesheet from '../styles/index.scss';

export default class Main extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="flex-body">
        <Head
          title="Max Freundlich"
          description={`Hey! You found my website!`}
        />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {this.props.children}
      </div>
    );
  }
}
