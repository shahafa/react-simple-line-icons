import React from 'react';
import PropTypes from 'prop-types';
import 'simple-line-icons/css/simple-line-icons.css';

const fontSize = (size) => {
  if (size.toLowerCase() === 'large') {
    return '22pt';
  } else if (size.toLowerCase() === 'small') {
    return '8pt';
  }
  return '18px';
};

const SimpleLineIcon = ({
  name,
  color,
  size,
  style,
  ...rest
}) => (
  <div
    className={`icon-${name}`}
    style={{
      color,
      fontSize: fontSize(size),
      ...style,
    }}
    {...rest}
  />
);

SimpleLineIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(['Large', 'large', 'Medium', 'medium', 'Small', 'small']),
  style: PropTypes.object,
};

SimpleLineIcon.defaultProps = {
  color: null,
  size: 'Medium',
  style: {},
};

export default SimpleLineIcon;
