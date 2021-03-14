import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { Tag as AntTag } from 'antd';

import tag from './Tag.style';

const Tag = ({ value }) => (
  <AntTag style={tag}>{value}</AntTag>
);

Tag.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Tag;
