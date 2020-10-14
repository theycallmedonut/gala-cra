import fetchMock from 'fetch-mock';
import { dummyCardsLists } from './dummyResponse';

const mockFetch = (data, isFail = false) => {
  console.log('Sent:', data, isFail);
  return isFail ? Promise.reject({ status: 400 }) : Promise.resolve({ status: 200, body: data });
};

export const getListApi = () => mockFetch(dummyCardsLists);

export const sendQtyApi = (data) => mockFetch(data);

export const sendContactApi = (data) => mockFetch(data);
