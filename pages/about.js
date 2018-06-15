import React from 'react';
import Link from 'next/link'
import PageHeader from '../components/PageHeader';
import PropTypes from 'prop-types';

export default class About extends React.Component {
  render() {
    return(
      <div>
        <PageHeader page={this.props.page} />
        <div className="page-padding">
          Stuff
        </div>
      </div>
    )
  }
}

About.propTypes = {
  page: PropTypes.number.isRequired,
}