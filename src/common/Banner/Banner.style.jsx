import { colors, size } from '../../utils/constants';

const { laptop, tablet } = size;

export const banner = (width) => ({
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  background: 'white',
  height: width < tablet ? 80 : 150,
  verticalAlign: 'center',
  borderBottom: `1px solid ${colors.gray}`,
  padding: width < tablet ? '20px 5% 0' : '80px 15% 0',
  marginTop: 50,
});

export const button = (width) => (width < laptop ? {
  width: 40,
  padding: '0 10px',
} : {
  width: 110,
});

export const title = (width) => (width < tablet ? {
  fontSize: 23,
  lineHeight: 1.75,
} : {
  fontSize: 30,
});

export default { banner, button, title };
