import * as types from './constants';

export function setAccount(value) {
  return {
    type: types.SET_ACCOUNT,
    value,
  };
}
