import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import keys from 'lodash/keys';

import { Row } from 'antd';
import common from '../../../common';

import RoundModal from './ConfirmationModal.style';

const { Tag } = common;

const IntentList = ({ intents: intentsProp, hide, isVisible }) => {
  const intents = keys(intentsProp);

  return (
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
        {intents.length
          ? 'You have selected the following reply templates:'
          : 'You have not selected any reply template.'}
      </Row>
      <Row>
        {intents.map((intent) => (
          <Tag key={intent} value={intent} />
        ))}
      </Row>
    </RoundModal>
  );
};

IntentList.propTypes = {
  intents: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object])).isRequired,
  hide: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default IntentList;
