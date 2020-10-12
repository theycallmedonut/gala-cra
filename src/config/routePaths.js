const routesPath = {
  HOME: '/',
  PAYMENT: '/payment',
};

export const types = Object.keys(routesPath).reduce((acc, cur) => {
  acc[cur] = cur;
  return acc;
}, {});

export const { HOME, PAYMENT } = routesPath;

export default routesPath;
