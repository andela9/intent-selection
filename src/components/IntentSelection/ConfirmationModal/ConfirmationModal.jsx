import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { Row } from 'antd';

import common from '../../../common';
import RoundModal from './ConfirmationModal.style';

const { Tag } = common;

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
  >
    <Row style={{ marginBottom: 10 }}>
      {Object.keys(intents).length ? 'You have selected the following reply templates:' : 'You have not select any reply template.'}
    </Row>
    <Row>
      {Object.keys(intents).map((intent) => (
        <Tag value={intent} />
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
