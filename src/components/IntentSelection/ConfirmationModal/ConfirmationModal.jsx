import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Row } from 'antd';
import { selectSelectedIntentsList } from '../../../selectors/intents';

import common from '../../../common';
import { getMargin } from '../../../utils/styleUtil';

import RoundModal from './ConfirmationModal.style';

const { Tag } = common;

const IntentList = ({ hide, isVisible }) => {
  const intents = useSelector(selectSelectedIntentsList);

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
      <Row style={getMargin(10)}>
        {intents.length
          ? 'You have selected the following reply templates:'
          : 'You have not selected any reply template.'}
      </Row>
      <Row>
        {/* TODO: Add an unselect intent badge onHover */}
        {intents.map((intent) => (
          <Tag key={intent.name} value={intent.name} />
        ))}
      </Row>
    </RoundModal>
  );
};

IntentList.propTypes = {
  hide: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default IntentList;
