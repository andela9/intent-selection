/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'antd';

const Intent = ({ data }) => (
  <Card onClick={() => {}} hoverable style={{ width: 300, margin: 20, borderRadius: 20 }}>
    <p>{data.name}</p>
    <p>{data.description}</p>
    <p>{data.trainingData.expressions.reduce((string, expression) => `${string} ${expression.text}, `, '')}</p>
    <p>{data.reply.text}</p>
  </Card>
);

Intent.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Intent;
