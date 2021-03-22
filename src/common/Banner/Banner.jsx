import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import {
  Typography, Button, Row, Col,
} from 'antd';

import useWindowSize from '../../utils/useWindowSize';
import { size } from '../../utils/constants';

import { banner, button, title } from './Banner.style';

const { Title } = Typography;

const { laptop } = size;

const Banner = ({ label, onPrev, onNext }) => {
  const { width } = useWindowSize();

  return (
    <Row style={banner(width)} justify="space-between">
      {/* TODO: Add a progress indicator of the bot creation process */}
      <Col>
        <Button style={button(width)} type="primary" size="large" shape="round" onClick={onPrev}>{width < laptop ? '<' : 'Previous'}</Button>
      </Col>
      <Col>
        <Title style={title(width)}>{ label }</Title>
      </Col>
      <Col>
        <Button style={button(width)} type="primary" size="large" shape="round" onClick={onNext}>{width < laptop ? '>' : 'Next'}</Button>
      </Col>
    </Row>
  );
};

Banner.propTypes = {
  label: PropTypes.string.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Banner;
