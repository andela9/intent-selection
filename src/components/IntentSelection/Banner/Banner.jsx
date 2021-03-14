import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import {
  Typography, Button, Row, Col,
} from 'antd';

import { banner } from './Banner.style';

const { Title } = Typography;

const Header = ({ showModal }) => (
  <Row style={banner} justify="space-between">
    {/* TODO: Add a progress indicator of the bot creation process */}
    <Col>
      <Button type="primary" size="large" shape="round">Previous</Button>
    </Col>
    <Col>
      <Title level={2}> Choose your reply templates </Title>
    </Col>
    <Col>
      <Button type="primary" size="large" shape="round" onClick={showModal}>Next</Button>
    </Col>
  </Row>
);

Header.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Header;
