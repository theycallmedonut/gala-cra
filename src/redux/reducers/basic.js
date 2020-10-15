import {
  FAILURE_FETCH_CARDS_LIST,
  START_FETCH_CARDS_LIST,
  SUCCESS_FETCH_CARDS_LIST,
  SUCCESS_FETCH_TOTAL_MONTHS,
  SUCCESS_SET_IS_DETAILS_STAGE,
  SUCCESS_SET_IS_MOBILE,
  SUCCESS_SET_QTY,
} from '../types';

const initialState = {
  totalMonths: '',
  cards: [],
  qty: 0,
  isMobile: null,
  isDetailsStage: false,
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

    case SUCCESS_SET_IS_MOBILE:
      return {
        ...state,
        isMobile: action.payload,
      };

    case SUCCESS_SET_IS_DETAILS_STAGE:
      return {
        ...state,
        isDetailsStage: action.payload,
      };

    default:
      return state;
  }
}
