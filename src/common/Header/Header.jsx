import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import {
  Typography, Layout, Row,
} from 'antd';

import { headerWrapper, header, company } from './Header.style';

const { Header: AntdHeader } = Layout;

const { Title } = Typography;

const Header = () => (
  <AntdHeader style={headerWrapper}>
    <Row style={header}>
      <Title level={3} style={company}> ultimate.ai </Title>
    </Row>
  </AntdHeader>
);

export default Header;
