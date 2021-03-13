import { colors } from '../../../utils/constants';

export const headerStyle = {
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  background: 'white',
  height: 185,
  padding: '100px 15% 0',
  verticalAlign: 'center',
  borderBottom: `1px solid ${colors.gray}`,
};

export const titleStyle = {
  lineHeight: 2,
};

export default { headerStyle, titleStyle };
