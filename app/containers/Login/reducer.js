/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer';
import * as types from './constants';

// import { DEFAULT_LOCALE } from '../../i18n';

export const initialState = {
  account: null,
};

/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_ACCOUNT:
        state.account = action.value;
        return { ...state };
      default:
        return state;
    }
  });

export default languageProviderReducer;
