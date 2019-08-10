import React from 'react';
import PropTypes from 'prop-types';
import '../../static/styles/descriptive-section.scss';

const DescriptiveSection = props => (
  <div className="descriptive-section">
    <h2 id={props.identifier}>{props.title}</h2>
    <div className="descriptive-section-inner">
      {props.children}
    </div>
  </div>
);

DescriptiveSection.propTypes = {
  children: PropTypes.node,
  // Title of the section
  title: PropTypes.string.isRequired,
  // Used as the ID of the section, linked via Navbar
  identifier: PropTypes.string.isRequired,
}

export default DescriptiveSection;