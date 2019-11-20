import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the language domain
 */

const selectLogin = state => state.account || initialState;

/**
 * Select the language locale
 */

const makeSelectAccount = () =>
  createSelector(
    selectLogin,
    loginState => loginState.account,
  );

export { selectLogin, makeSelectAccount };
