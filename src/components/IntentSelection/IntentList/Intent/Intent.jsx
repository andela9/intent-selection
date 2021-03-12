/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Card, Typography, Row } from 'antd';

const { Title, Text } = Typography;

const Intent = ({ data, select }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Card
      onClick={() => {
        select(data, selected);
        setSelected(!selected);
      }}
      hoverable
      style={{
        width: 400, margin: 20, borderRadius: 20, textAlign: 'left', borderColor: selected ? 'blue' : 'black',
      }}
    >
      <Title level={3}>{data.name}</Title>
      <Row>{data.description}</Row>
      <Row>
        <Text strong>Examples: </Text>
        {data.trainingData.expressions.reduce((string, expression) => `${string} ${expression.text}, `, '')}
      </Row>
      <Row>
        <Text strong>{'Reply: '}</Text>
        {data.reply.text}
      </Row>
    </Card>
  );
};

Intent.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  select: PropTypes.func.isRequired,
};

export default Intent;
