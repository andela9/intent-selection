import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import {
  Typography, Layout, Button, Row, Col,
} from 'antd';

import {
  headerWrapper, header, company, banner, title,
} from './Header.style';

const { Header: AntdHeader } = Layout;

const { Title } = Typography;

const Header = ({ showModal }) => (
  <AntdHeader style={headerWrapper}>
    <Row style={header}>
      <Title level={3} style={company}> ultimate.ai </Title>
    </Row>
    <Row style={banner} justify="space-between">
      {/* TODO: Add a progress indicator of the bot creation process */}
      <Col>
        <Button type="primary" size="large" shape="round">Previous</Button>
      </Col>
      <Col>
        <Title level={2} style={title}> Choose your reply templates </Title>
      </Col>
      <Col>
        <Button type="primary" size="large" shape="round" onClick={showModal}>Next</Button>
      </Col>
    </Row>
  </AntdHeader>
);

Header.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Header;
