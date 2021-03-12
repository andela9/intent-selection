import React from 'react';
import { Typography } from 'antd';

import IntentList from './IntentList';

const { Title } = Typography;

const IntentSelection = () => (
  <div style={{
    marginLeft: '10%', marginRight: '10%', textAlign: 'left',
  }}
  >
    <Title> Please select your preferred reply templates </Title>
    <IntentList />
  </div>
);

export default IntentSelection;
