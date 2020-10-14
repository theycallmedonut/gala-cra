import fetchMock from 'fetch-mock';
import { dummyCardsLists } from './dummyResponse';

const mockFetch = (data, isFail) => {
  console.log('Sent:', data, isFail);
  return isFail ? Promise.reject({ status: 400 }) : Promise.resolve({ status: 200, body: data });
};

export const getCardsListApi = () => mockFetch(dummyCardsLists);

export const getTotalMonthsApi = () => mockFetch(127680);

export const sendQtyApi = (data) => mockFetch(data);

export const sendContactApi = (data) => mockFetch(data);
