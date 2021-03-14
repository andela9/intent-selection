import React from 'react';
import { Layout } from 'antd';

import useModal from '../../utils/useModal';

import Header from '../../common/Header';
import Banner from '../../common/Banner';
import Footer from '../../common/Footer';

import IntentList from './IntentList';
import ConfirmationModal from './ConfirmationModal';

import { layout, content } from './IntentSelection.style';

const { Content } = Layout;

const IntentSelection = () => {
  const [showConfirmationModal, hideConfirmationModal, isConfirmationModalVisible] = useModal();

  return (
    <Layout style={layout}>
      <Header />
      <Banner title="Choose your reply templates" onPrev={() => {}} onNext={showConfirmationModal} />
      <Content style={content}>
        <IntentList />
        <ConfirmationModal
          hide={hideConfirmationModal}
          isVisible={isConfirmationModalVisible}
        />
      </Content>
      <Footer />
    </Layout>
  );
};

export default IntentSelection;
