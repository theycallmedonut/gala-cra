import { dummyCardsLists } from './dummyResponse';

const mockFetch = (data, isFail) => {
  return isFail ? Promise.reject({ status: 400 }) : Promise.resolve({ status: 200, body: data });
};

export const getCardsListApi = () => mockFetch(dummyCardsLists);

export const getTotalMonthsApi = () => mockFetch(127680);

export const sendQtyFormApi = (data) => mockFetch(data);

export const sendPaymentFormApi = (data) => mockFetch(data);

export const sendContactFormApi = (data) => mockFetch(data);
