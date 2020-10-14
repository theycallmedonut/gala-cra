import {
  FAILURE_FETCH_CARDS_LIST,
  START_FETCH_CARDS_LIST,
  SUCCESS_FETCH_CARDS_LIST,
} from '../types';
import { getListApi } from '../../api';

export const fetchCardsAction = (formData) => (dispatch) => {
  dispatch({ type: START_FETCH_CARDS_LIST });

  return getListApi(formData)
    .then((payload) =>
      dispatch({
        type: SUCCESS_FETCH_CARDS_LIST,
        payload: payload.body,
      }),
    )
    .catch((error) =>
      dispatch({
        type: FAILURE_FETCH_CARDS_LIST,
        payload: error,
        notification: {
          type: 'error',
          text: 'Fetch form has failure',
        },
      }),
    );
};
