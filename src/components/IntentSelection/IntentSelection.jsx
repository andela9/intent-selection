import React, { useState } from 'react';
import {
  Typography, Layout, Button, Row, Col,
} from 'antd';
import omit from 'lodash/omit';
import { useDispatch } from 'react-redux';
import useModal from '../../utils/useModal';

import { selectAllIntents } from '../../reducers/intents';

import IntentList from './IntentList';
import ConfirmationModal from './ConfirmationModal';

import { layoutStyle, headerStyle, contentStyle } from './IntentSelection.style';

const { Header, Content } = Layout;

const { Title } = Typography;

const IntentSelection = () => {
  const [selectedIntents, setSelectedIntents] = useState({});
  const dispatch = useDispatch();
  const [showConfirmationModal, hideConfirmationModal, isConfirmationModalVisible] = useModal();

  const updateSelected = (intent, selected) => {
    setSelectedIntents((prevSelectedIntents) => {
      let ret;

      if (selected) {
        ret = omit(prevSelectedIntents, [intent.name]);
      } else {
        ret = { ...prevSelectedIntents, [intent.name]: intent.id };
      }

      return ret;
    });
  };

  const selectAll = () => {
    dispatch(selectAllIntents());
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Row justify="space-between">
          <Col>
            <Title level={2}> Choose your reply templates </Title>
          </Col>
          <Col>
            <Button size="large" shape="round" onClick={selectAll}>Select All</Button>
            <Button type="primary" size="large" shape="round" onClick={showConfirmationModal}>Submit</Button>
          </Col>
        </Row>
      </Header>
      <Content style={contentStyle}>
        <IntentList updateSelected={updateSelected} />
        <ConfirmationModal
          intents={selectedIntents}
          hide={hideConfirmationModal}
          isVisible={isConfirmationModalVisible}
        />
      </Content>
    </Layout>
  );
};

export default IntentSelection;
