import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children, level, className }) => {
  const Tag = `h${level}`;

  return (
    <Tag aria-level={level} className={className}>
      {children}
    </Tag>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Heading;
