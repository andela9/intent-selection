import { size } from '../../../utils/constants';

const { laptopL, tablet } = size;

export const selectButton = {
  marginRight: 12,
  width: 140,
};

export const toolbar = {
  padding: '0px 15%',
  marginTop: 10,
  marginBottom: 10,
  width: '100%',
};

export const intentList = (width) => {
  let style;

  if (width < tablet) {
    style = { width: 380 };
  } else if (width < laptopL) {
    style = { width: 840 };
  } else {
    style = { width: 1260 };
  }

  return style;
};

export default { intentList, toolbar, selectButton };
