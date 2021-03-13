import { configureStore } from '@reduxjs/toolkit';

import intents from './intents';

export default configureStore({
  reducer: {
    intents,
  },
});
