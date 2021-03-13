import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import {
  Typography, Layout, Button, Row, Col,
} from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { selectSelectedIntentsList, selectIntentsCount } from '../../../selectors/intents';
import { selectAllIntents, unselectAllIntents } from '../../../reducers/intents';

import { headerStyle } from './Header.style';

const { Header: AntdHeader } = Layout;

const { Title } = Typography;

const Header = ({ showModal }) => {
  const dispatch = useDispatch();
  const intentsCount = useSelector(selectIntentsCount);
  const selectedIntentsList = useSelector(selectSelectedIntentsList);
  const allSelected = intentsCount === selectedIntentsList.length;

  const selectAll = () => {
    if (allSelected) {
      dispatch(unselectAllIntents());
    } else {
      dispatch(selectAllIntents());
    }
  };

  return (
    <AntdHeader style={headerStyle}>
      <Row justify="space-between">
        <Col>
          {/* TODO: Add a progress indicator of the bot creation process */}
          <Title level={2}> Choose your reply templates </Title>
        </Col>
        <Col>
          {/* TODO: Add a search bar */}
          <Button size="large" shape="round" onClick={selectAll} style={{ marginRight: 10 }}>
            {allSelected ? 'Unselect All' : 'Select All'}
          </Button>
          <Button type="primary" size="large" shape="round" onClick={showModal}>Submit</Button>
        </Col>
      </Row>
    </AntdHeader>
  );
};

Header.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Header;
