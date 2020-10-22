import {
  FAILURE_FETCH_FORM,
  START_FETCH_FORM,
  SUCCESS_CLEAR_FORMS_DATA,
  SUCCESS_FETCH_FORM,
  SUCCESS_SAVE_FORMS_DATA,
} from '../types';

const initialState = {
  isLoading: false,
  error: '',
  qty: {},
  payment: {},
  contact: {},
  formsData: {},
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

    case SUCCESS_SAVE_FORMS_DATA:
      return {
        ...state,
        formsData: {
          ...state.formsData,
          ...action.payload,
        },
      };

    case SUCCESS_CLEAR_FORMS_DATA:
      return {
        ...state,
        formsData: {},
      };

    default:
      return state;
  }
}
