import React from 'react';
import {
  Typography, Layout, Button, Row, Col,
} from 'antd';

import { useDispatch } from 'react-redux';
import useModal from '../../utils/useModal';

import { selectAllIntents } from '../../reducers/intents';

import IntentList from './IntentList';
import ConfirmationModal from './ConfirmationModal';

import { layoutStyle, headerStyle, contentStyle } from './IntentSelection.style';

const { Header, Content } = Layout;

const { Title } = Typography;

const IntentSelection = () => {
  const dispatch = useDispatch();
  const [showConfirmationModal, hideConfirmationModal, isConfirmationModalVisible] = useModal();

  const selectAll = () => {
    dispatch(selectAllIntents());
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Row justify="space-between">
          <Col>
            {/* TODO: Add a progress indicator of the bot creation process */}
            <Title level={2}> Choose your reply templates </Title>
          </Col>
          <Col>
            {/* TODO: Add a search bar */}
            <Button size="large" shape="round" onClick={selectAll} style={{ marginRight: 10 }}>Select All</Button>
            <Button type="primary" size="large" shape="round" onClick={showConfirmationModal}>Submit</Button>
          </Col>
        </Row>
      </Header>
      <Content style={contentStyle}>
        <IntentList />
        <ConfirmationModal
          // intents={selectedIntents}
          hide={hideConfirmationModal}
          isVisible={isConfirmationModalVisible}
        />
      </Content>
    </Layout>
  );
};

export default IntentSelection;
