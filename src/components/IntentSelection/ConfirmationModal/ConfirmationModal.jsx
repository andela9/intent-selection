import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import {
  Modal, Row, Typography, Tag,
} from 'antd';
import styled from '@emotion/styled';

const { Text } = Typography;

const RoundModal = styled(Modal)`
  .ant-modal-header {
    border-radius: 30px;
    border: none;
  }

  .ant-modal-footer {
    border-radius: 30px;
    border: none;
  }

  .ant-modal-content {
    border-radius: 30px;
    padding: 10px;
  }

  .ant-modal-title {
    font-weight: 600;
    font-size: 24px;
    margin-top: 3px;
  }
`;

const IntentList = ({ intents, hide, isVisible }) => (
  <RoundModal
    title="Reply template list"
    visible={isVisible}
    onOk={hide}
    onCancel={hide}
    okText="Confirm"
    cancelText="Cancel"
    okButtonProps={{ type: 'primary', shape: 'round' }}
    cancelButtonProps={{ shape: 'round' }}
    style={{ fontFamily: 'Montserrat, sans-serif' }}
  >
    <Row style={{ marginBottom: 10 }}>
      <Text strong>You have selected the following reply templates: </Text>
    </Row>
    <Row>
      {Object.keys(intents).map((intent) => (
        <Tag
          key={intent.text}
          style={{
            borderRadius: 30,
            padding: '5px 10px',
            marginBottom: 8,
          }}
        >
          {intent}
        </Tag>
      ))}
    </Row>
  </RoundModal>
);

IntentList.propTypes = {
  intents: PropTypes.objectOf(PropTypes.object).isRequired,
  hide: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default IntentList;
