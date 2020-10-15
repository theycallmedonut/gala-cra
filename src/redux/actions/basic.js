import {
  FAILURE_FETCH_CARDS_LIST,
  FAILURE_FETCH_TOTAL_MONTHS,
  START_FETCH_CARDS_LIST,
  START_FETCH_TOTAL_MONTHS,
  SUCCESS_FETCH_CARDS_LIST,
  SUCCESS_FETCH_TOTAL_MONTHS,
  SUCCESS_SET_IS_DETAILS_STAGE,
  SUCCESS_SET_IS_MOBILE,
  SUCCESS_SET_QTY,
} from '../types';
import { getTotalMonthsApi, getCardsListApi } from '../../api';

export const fetchCardsAction = (formData) => (dispatch) => {
  dispatch({ type: START_FETCH_CARDS_LIST });

  return getCardsListApi(formData)
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

export const fetchTotalMonthsAction = (formData) => (dispatch) => {
  dispatch({ type: START_FETCH_TOTAL_MONTHS });

  return getTotalMonthsApi(formData)
    .then((payload) =>
      dispatch({
        type: SUCCESS_FETCH_TOTAL_MONTHS,
        payload: payload.body,
      }),
    )
    .catch((error) =>
      dispatch({
        type: FAILURE_FETCH_TOTAL_MONTHS,
        payload: error,
        notification: {
          type: 'error',
          text: 'Fetch form has failure',
        },
      }),
    );
};

export const setQtyAction = ({ qty }) => (dispatch) => {
  dispatch({ type: SUCCESS_SET_QTY, payload: qty });
};

export const setIsMobileAction = (isMobile) => (dispatch) => {
  dispatch({ type: SUCCESS_SET_IS_MOBILE, payload: isMobile });
};

export const setIsDetailsStageAction = (isDetailsStage) => (dispatch) => {
  dispatch({ type: SUCCESS_SET_IS_DETAILS_STAGE, payload: isDetailsStage });
};
