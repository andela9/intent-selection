export const getCardStyle = (selected) => ({
  width: 400,
  margin: 20,
  borderRadius: 20,
  textAlign: 'left',
  border: selected ? '2px solid #7bb2f5' : '1px solid #e4e4e4',
});

export const getMargin = (margin) => ({ marginBottom: margin });

export default { getCardStyle, getMargin };
