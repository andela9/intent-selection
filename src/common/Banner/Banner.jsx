import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import {
  Typography, Button, Row, Col,
} from 'antd';

import { banner } from './Banner.style';

const { Title } = Typography;

const Banner = ({ title, onPrev, onNext }) => (
  <Row style={banner} justify="space-between">
    {/* TODO: Add a progress indicator of the bot creation process */}
    <Col>
      <Button type="primary" size="large" shape="round" onClick={onPrev}>Previous</Button>
    </Col>
    <Col>
      <Title level={2}>{ title }</Title>
    </Col>
    <Col>
      <Button type="primary" size="large" shape="round" onClick={onNext}>Next</Button>
    </Col>
  </Row>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Banner;
