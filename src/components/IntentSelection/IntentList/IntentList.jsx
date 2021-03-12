import React, { useState } from 'react';
import { Row } from 'antd';

import intents from './intents.json';

import Intent from './Intent';

const IntentList = () => {
  const [selectedIntents, setSelectedIntents] = useState({});

  console.log('selectedIntents', selectedIntents);

  const updateSelectedIntents = (intent, selected) => {
    setSelectedIntents((prevSelectedIntents) => {
      let ret;

      if (selected) {
        ret = { ...prevSelectedIntents, [intent.name]: undefined };
      } else {
        ret = { ...prevSelectedIntents, [intent.name]: intent.id };
      }

      return ret;
    });
  };

  return (
    <Row justify="space-between">
      {intents.map((intent) => <Intent data={intent} select={updateSelectedIntents} />)}
    </Row>
  );
};

export default IntentList;
