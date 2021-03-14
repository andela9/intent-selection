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
    font-family: Montserrat, sans-serif;
    border-radius: 30px;
    padding: 10px;
    margin-top: 25%;
  }

  .ant-modal-title {
    font-weight: 600;
    font-size: 24px;
    margin-top: 3px;
  }
`;

export default RoundModal;
