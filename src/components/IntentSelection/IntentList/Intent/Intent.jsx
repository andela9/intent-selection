import React, { useState } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

import { Card, Typography, Row } from 'antd';
import common from '../../../../common';
import { getCardStyle, getMargin } from './Intent.style';

const { Tag } = common;

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
      style={getCardStyle(selected)}
    >
      <Title level={3} style={getMargin(0)}>{data.name}</Title>
      <Row style={getMargin(20)}>{data.description}</Row>
      <Row style={getMargin(5)}>
        <Text strong>Examples: </Text>
      </Row>
      <Row style={getMargin(10)}>
        {data.trainingData.expressions.map((expression) => (
          <Tag value={expression.text} />
        ))}
      </Row>
      <Row style={getMargin(5)}>
        <Text strong>Reply:</Text>
      </Row>
      <Row style={getMargin(10)}>
        {data.reply.text}
      </Row>
    </Card>
  );
};

Intent.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object])).isRequired,
  select: PropTypes.func.isRequired,
};

export default Intent;
