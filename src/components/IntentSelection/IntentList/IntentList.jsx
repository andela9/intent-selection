import React from 'react';
import { Row } from 'antd';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectIntents } from '../../../selectors/intents';

import Intent from './Intent';

const IntentList = ({ updateSelected }) => {
  const intents = useSelector(selectIntents);
  console.log('intents', intents);
  return (
    <Row justify="center">
      {intents.map((intent) => <Intent key={intent.name} info={intent} select={updateSelected} />)}
    </Row>
  );
};

IntentList.propTypes = {
  updateSelected: PropTypes.func.isRequired,
};

export default IntentList;
