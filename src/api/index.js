const mockFetchSuccess = (data) => {
  return new Promise((resolve, reject) => {
    resolve({ type: 'SUCCESS', data });
  });
};
const mockFetchFail = (data) => {
  return new Promise((resolve, reject) => {
    reject({ type: 'FAILURE', data });
  });
};

export const getList = () => mockFetchSuccess();

export const sendQtyApi = (data) => mockFetchSuccess(data);

export const sendContactApi = (data) => mockFetchSuccess(data);
