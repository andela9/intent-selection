import React from 'react';
import { Layout } from 'antd';

import footer from './Footer.style';

const { Footer: AntFooter } = Layout;

const Footer = () => (
  <AntFooter style={footer} />
);

export default Footer;
