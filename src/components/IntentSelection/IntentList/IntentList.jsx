import React from 'react';
import { Row } from 'antd';
import { useSelector } from 'react-redux';

import { selectIntentsList } from '../../../selectors/intents';

import Intent from './Intent';

const IntentList = () => {
  const intentsList = useSelector(selectIntentsList);
  console.log('intentsList', intentsList);
  return (
    <Row justify="center">
      {intentsList.map((intent) => (
        <Intent
          key={intent.name}
          info={intent}
        />
      ))}
    </Row>
  );
};

export default IntentList;
