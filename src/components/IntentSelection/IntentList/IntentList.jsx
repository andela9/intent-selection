import React from 'react';
import { Row } from 'antd';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import intents from './intents.json';

import Intent from './Intent';

const IntentList = ({ updateSelected }) => (
  <Row justify="center">
    {intents.map((intent) => <Intent key={intent.name} data={intent} select={updateSelected} />)}
  </Row>
);

IntentList.propTypes = {
  updateSelected: PropTypes.func.isRequired,
};

export default IntentList;
