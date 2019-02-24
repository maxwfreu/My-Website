import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';

export default class Scrumptious extends React.Component {
  render() {
    return(
      <div className="wrapper description-wrapper">
        <h2>Scrumptious</h2>

        <p>Scrumptious is a chrome extension that turns your new tab into a kanban board.</p>
        <p>Checkout the <a href="https://www.scrumptioustab.com/demo" target="_blank" rel="noopener noreferrer" className="small-link">demo</a> </p>
        <h3> Stack </h3>
        <div>
          <h1>Docker </h1>
        </div>
      </div>
    )
  }
}


Scrumptious.propTypes = {
  page: PropTypes.number.isRequired,
}