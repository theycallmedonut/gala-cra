import {
  FAILURE_FETCH_CARDS_LIST,
  START_FETCH_CARDS_LIST,
  SUCCESS_FETCH_CARDS_LIST,
} from '../types';

const initialState = {
  list: [],
};

export default function cards(state = initialState, action = {}) {
  switch (action.type) {
    case SUCCESS_FETCH_CARDS_LIST:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
}
