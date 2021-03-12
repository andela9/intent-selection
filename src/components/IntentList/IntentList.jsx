import React from 'react';

import intents from './intents.json';

import Intent from './Intent';

const IntentList = () => intents.map((intent) => <Intent data={intent} />);

export default IntentList;
