import React from 'react';
import { Layout } from 'antd';

import useModal from '../../utils/useModal';

import Header from '../../common/Header';
import Banner from '../../common/Banner';
import Footer from '../../common/Footer';

import useWindowSize from '../../utils/useWindowSize';

import IntentList from './IntentList';
import ConfirmationModal from './ConfirmationModal';

import { layout, content } from './IntentSelection.style';

const { Content } = Layout;

const IntentSelection = () => {
  const [showConfirmationModal, hideConfirmationModal, isConfirmationModalVisible] = useModal();
  const { width } = useWindowSize();

  return (
    <Layout style={layout}>
      <Header />
      <Banner label="Choose your reply templates" onPrev={() => {}} onNext={showConfirmationModal} />
      <Content style={content(width)}>
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
