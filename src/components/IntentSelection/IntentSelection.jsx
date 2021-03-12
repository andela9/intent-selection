import React from 'react';
import {
  Typography, Layout, Button, Row, Col,
} from 'antd';

import IntentList from './IntentList';

const { Header, Content } = Layout;

const { Title } = Typography;

const IntentSelection = () => (
  <Layout style={{
    background: 'white', textAlign: 'left', fontFamily: 'Montserrat, sans-serif',
  }}
  >
    <Header style={{
      position: 'fixed', zIndex: 1, width: '100%', background: 'white', height: 175, padding: '100px 15% 0', verticalAlign: 'center',
    }}
    >
      <Row justify="space-between">
        <Col>
          <Title level={2}> Please select your preferred reply templates </Title>
        </Col>
        <Col>
          <Button type="primary" size="large" shape="round">Submit</Button>
        </Col>
      </Row>
    </Header>
    <Content style={{
      marginTop: 175, background: 'white', marginLeft: '10%', marginRight: '10%',
    }}
    >
      <IntentList />
    </Content>
  </Layout>
);

export default IntentSelection;
