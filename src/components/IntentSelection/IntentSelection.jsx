import React from 'react';
import { Layout } from 'antd';

import useModal from '../../utils/useModal';

import Header from './Header';
import Banner from './Banner';
import IntentList from './IntentList';
import ConfirmationModal from './ConfirmationModal';

import { layout, content } from './IntentSelection.style';

const { Content } = Layout;

const IntentSelection = () => {
  const [showConfirmationModal, hideConfirmationModal, isConfirmationModalVisible] = useModal();

  return (
    <Layout style={layout}>
      <Header />
      <Banner showModal={showConfirmationModal} />
      <Content style={content}>
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
