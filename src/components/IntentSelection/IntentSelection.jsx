import React from 'react';
import { Layout } from 'antd';

import useModal from '../../utils/useModal';

import Header from './Header';
import IntentList from './IntentList';
import ConfirmationModal from './ConfirmationModal';

import { layoutStyle, contentStyle } from './IntentSelection.style';

const { Content } = Layout;

const IntentSelection = () => {
  const [showConfirmationModal, hideConfirmationModal, isConfirmationModalVisible] = useModal();

  return (
    <Layout style={layoutStyle}>
      <Header showModal={showConfirmationModal} />
      <Content style={contentStyle}>
        <IntentList />
        <ConfirmationModal
          hide={hideConfirmationModal}
          isVisible={isConfirmationModalVisible}
        />
      </Content>
    </Layout>
  );
};

export default IntentSelection;
