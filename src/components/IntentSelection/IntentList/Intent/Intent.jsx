/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Card, Typography, Row, Tag,
} from 'antd';

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
        width: 400, margin: 20, borderRadius: 20, textAlign: 'left', borderColor: selected ? '#7bb2f5' : '#e4e4e4', fontFamily: 'Montserrat',
      }}
    >
      <Title level={3} style={{ fontWeight: 600, marginBottom: 0 }}>{data.name}</Title>
      <Row style={{ marginBottom: 20 }}>{data.description}</Row>
      <Row style={{ marginBottom: 10 }}>
        <Text strong>Examples: </Text>
      </Row>
      <Row>
        {data.trainingData.expressions.map((expression) => (
          <Tag style={{
            borderRadius: 30,
            padding: '5px 10px',
            marginBottom: 10,
          }}
          >
            {expression.text}
          </Tag>
        ))}
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Text strong>{'Reply: '}</Text>
      </Row>
      <Row style={{ marginBottom: 10 }}>
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
