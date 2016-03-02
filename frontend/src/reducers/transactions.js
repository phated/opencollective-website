import merge from 'lodash/object/merge';

import * as constants from '../constants/transactions';
import { HYDRATE } from '../constants/session';

export default function transactions(state={}, action={}) {
  switch (action.type) {
    case constants.TRANSACTIONS_SUCCESS:
    case constants.TRANSACTION_SUCCESS:
      return merge({}, state, action.transactions);

    case HYDRATE:
      if (!action.data.transactionFilter) {
        return state;
      }
      return merge({}, state, {
        transactionFilter: action.data.transactionFilter
      });

    default:
      return state;
  }
}

