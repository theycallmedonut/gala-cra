import { FAILURE_FETCH_FORM, START_FETCH_FORM, SUCCESS_FETCH_FORM } from '../types';

const initialState = {
  isLoading: false,
  error: '',
  qty: {},
  payment: {},
  contact: {},
};

export default function form(state = initialState, action = {}) {
  switch (action.type) {
    case START_FETCH_FORM:
      return { ...state, isLoading: true };

    case FAILURE_FETCH_FORM:
      return { ...state, isLoading: false };

    case SUCCESS_FETCH_FORM:
      return {
        ...state,
        [action.payload.formType]: {
          ...state[action.payload.formType],
          ...action.payload,
        },
        isLoading: false,
      };

    default:
      return state;
  }
}
