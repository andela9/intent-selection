import React from 'react';
import { Row, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';

import { selectIntentsList, selectSelectedIntentsList } from '../../../selectors/intents';
import { selectAllIntents, unselectAllIntents } from '../../../reducers/intents';
import useWindowSize from '../../../utils/useWindowSize';

import Intent from './Intent';
import { intentList, selectButton, toolbar } from './IntentList.style';

const IntentList = () => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();

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
      <Row style={toolbar}>
        <Button size="large" shape="round" onClick={selectAll} style={selectButton}>
          {allSelected ? 'Unselect All' : 'Select All'}
        </Button>
        {/* TODO: Add implementation, use input instead */}
        <Button size="large" shape="round" icon={<SearchOutlined />}>Search</Button>
      </Row>
      <Row style={intentList(width)}>
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
