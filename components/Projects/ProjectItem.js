import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'

const ProjectItem = props => (
  <React.Fragment>
    <dt>
      {props.prefetch ? (
        <a href={props.url}>{props.title}</a>
      ) : (
        <Link href={props.url}><a>{props.title}</a></Link>
      )}
    </dt>
    <dd>
      <p>{props.description}</p>
      {props.children}
      <div className="stack">
        {props.stack.map((item, index) => (
          <React.Fragment>
            <div key={`${props.title}${item}`} className={item}>{item}</div>
            {index !== props.stack.length - 1 && (
              <span>&#183;</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </dd>
  </React.Fragment>
);

ProjectItem.defaultProps = {
  prefetch: false,
}

ProjectItem.propTypes = {
  description: PropTypes.string.isRequired,
  prefetch: PropTypes.bool,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default ProjectItem;
