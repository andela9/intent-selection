import React from 'react';
import { Row, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { selectIntentsList, selectSelectedIntentsList } from '../../../selectors/intents';
import { selectAllIntents, unselectAllIntents } from '../../../reducers/intents';

import Intent from './Intent';
import { selectButton } from './IntentList.style';

const IntentList = () => {
  const dispatch = useDispatch();
  const intentsList = useSelector(selectIntentsList);
  const selectedIntentsList = useSelector(selectSelectedIntentsList);
  const allSelected = intentsList.length === selectedIntentsList.length;

  const selectAll = () => {
    if (allSelected) {
      dispatch(unselectAllIntents());
    } else {
      dispatch(selectAllIntents());
    }
  };

  return (
    <>
      <Row style={{ padding: '0px 8%', margin: '20px 0' }}>
        {/* TODO: Add a search bar */}
        <Button size="large" shape="round" onClick={selectAll} style={selectButton}>
          {allSelected ? 'Unselect All' : 'Select All'}
        </Button>
      </Row>
      <Row justify="center">
        {intentsList.map((intent) => (
          <Intent
            key={intent.name}
            info={intent}
          />
        ))}
      </Row>
    </>
  );
};

export default IntentList;
