import { size } from '../../utils/constants';

const { tablet } = size;

export const layout = {
  background: 'white',
};

export const content = (width) => ({
  marginTop: width < tablet ? 150 : 220,
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export default { layout, content };
