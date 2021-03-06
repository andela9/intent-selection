import React from 'react';
import { useDispatch } from 'react-redux';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { Card, Typography, Row } from 'antd';

import { clickIntent } from '../../../../reducers/intents';
import { getMargin } from '../../../../utils/styleUtil';
import Tag from '../../../../common/Tag';

import { getCardStyle } from './Intent.style';

const { Title, Text } = Typography;

const Intent = ({ info }) => {
  const dispatch = useDispatch();

  return (
    <Card
      onClick={() => {
        dispatch(clickIntent(info.id));
      }}
      hoverable
      style={getCardStyle(info.selected)}
    >
      <Title level={4} style={getMargin(0)}>{info.name}</Title>
      <Row style={getMargin(20)}>{info.description}</Row>
      <Row style={getMargin(8)}>
        {/* TODO: Maybe add a see more examples icon */}
        <Text strong>Examples: </Text>
      </Row>
      <Row style={getMargin(10)}>
        {info.trainingData.expressions.map((expression) => (
          <Tag key={expression.text} value={expression.text} />
        ))}
      </Row>
      <Row style={getMargin(5)}>
        <Text strong>Reply:</Text>
      </Row>
      <Row style={getMargin(10)}>
        {info.reply.text}
      </Row>
    </Card>
  );
};

Intent.propTypes = {
  info: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object])).isRequired,
};

export default Intent;
