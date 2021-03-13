import { Modal } from 'antd';
import styled from '@emotion/styled';

const RoundModal = styled(Modal)`
  .ant-modal-header {
    border-radius: 30px;
    border: none;
  }

  .ant-modal-footer {
    border-radius: 30px;
    border: none;
  }

  .ant-modal-content {
    border-radius: 30px;
    padding: 10px;
  }

  .ant-modal-title {
    font-weight: 600;
    font-size: 24px;
    margin-top: 3px;
  }

  ant-modal-root {
    fontFamily: 'Montserrat, sans-serif'
  }
`;

export default RoundModal;
