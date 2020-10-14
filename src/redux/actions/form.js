import { FAILURE_FETCH_FORM, FORM_QTY, START_FETCH_FORM, SUCCESS_FETCH_FORM } from '../types';
import { sendQtyFormApi } from '../../api';

export const fetchQtyFormAction = (formData) => (dispatch) => {
  dispatch({ type: START_FETCH_FORM });

  return sendQtyFormApi(formData)
    .then((payload) =>
      dispatch({
        type: SUCCESS_FETCH_FORM,
        payload: {
          formType: FORM_QTY,
          ...payload.data,
        },
      }),
    )
    .catch((error) =>
      dispatch({
        type: FAILURE_FETCH_FORM,
        payload: error,
        notification: {
          type: 'error',
          text: 'Fetch form has failure',
        },
      }),
    );
};
