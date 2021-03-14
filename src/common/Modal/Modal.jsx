import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

import RoundModal from './Modal.style';

const Modal = ({
  title, onOk, onCancel, okText, cancelText, visible, children,
}) => (
  <RoundModal
    title={title}
    visible={visible}
    onOk={onOk}
    onCancel={onCancel}
    okText={okText}
    cancelText={cancelText}
    okButtonProps={{ type: 'primary', shape: 'round' }}
    cancelButtonProps={{ shape: 'round' }}
  >
    {children}
  </RoundModal>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

// Specifies the default values for props:
Modal.defaultProps = {
  okText: 'Ok',
  cancelText: 'Cancel',
};

export default Modal;
