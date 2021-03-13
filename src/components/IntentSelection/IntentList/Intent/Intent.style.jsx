import { colors } from '../../../../utils/constants';

const { accent, gray } = colors;

export const getCardStyle = (selected) => ({
  width: 410,
  margin: 20,
  borderRadius: 20,
  textAlign: 'left',
  border: selected
    ? `2px solid ${accent}`
    : `1px solid ${gray}`,
});

export default { getCardStyle };
