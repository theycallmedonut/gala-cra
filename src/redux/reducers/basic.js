import {
  FAILURE_FETCH_CARDS_LIST,
  START_FETCH_CARDS_LIST,
  SUCCESS_FETCH_CARDS_LIST,
  SUCCESS_FETCH_TOTAL_MONTHS,
} from '../types';

const initialState = {
  totalMonths: '',
  cards: [],
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

    default:
      return state;
  }
}
