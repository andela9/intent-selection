import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { Tag as AntTag } from 'antd';

import tagStyle from './Tag.style';

const Tag = ({ value }) => (
  <AntTag
    style={tagStyle}
  >
    {value}
  </AntTag>
);

Tag.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Tag;
