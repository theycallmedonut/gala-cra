import {
  FAILURE_FETCH_CARDS_LIST,
  START_FETCH_CARDS_LIST,
  SUCCESS_FETCH_CARDS_LIST,
  SUCCESS_FETCH_TOTAL_MONTHS,
  SUCCESS_SET_QTY,
} from '../types';

const initialState = {
  totalMonths: '',
  cards: [],
  qty: 0,
};

export default function basic(state = initialState, action = {}) {
  switch (action.type) {
    case SUCCESS_FETCH_CARDS_LIST:
      return {
        ...state,
        cards: action.payload,
      };

    case SUCCESS_FETCH_TOTAL_MONTHS:
      return {
        ...state,
        totalMonths: action.payload,
      };

    case SUCCESS_SET_QTY:
      return {
        ...state,
        qty: action.payload,
      };

    default:
      return state;
  }
}
