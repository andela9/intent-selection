import { colors } from '../../../utils/constants';

export const headerWrapper = {
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  background: 'white',
  height: 200,
  verticalAlign: 'center',
  borderBottom: `1px solid ${colors.gray}`,
  padding: 0,
};

export const header = {
  background: 'black',
  height: 50,
  padding: '0 20px',
};

export const company = {
  color: 'white',
  lineHeight: 2,
};

export const banner = {
  padding: '0 15%',
  marginTop: 70,
};

export const title = {
  lineHeight: 2,
};

export default {
  headerWrapper, header, company, banner, title,
};
