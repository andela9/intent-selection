import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const IntentList = ({ intents, hide, isVisible }) => {
  console.log('intents', intents);
  return (
    <Modal
      isOpen={isVisible}
      // onAfterOpen={hide}
      onRequestClose={hide}
      style={{ content: { margin: '10% 20%' }, overlay: { zIndex: 1 } }}
      contentLabel="Example Modal"
    >
      {Object.keys(intents).map((intent) => (<p>{intent}</p>))}
    </Modal>
  );
};

IntentList.propTypes = {
  intents: PropTypes.objectOf(PropTypes.object).isRequired,
  hide: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default IntentList;
