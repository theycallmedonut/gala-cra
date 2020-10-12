import { Redirect, Route } from 'react-router-dom';
import LayoutDefault from '../index';
import React from 'react';
import { array, func, node, oneOfType, shape, string } from 'prop-types';

function processMiddleware(middlewares, props) {
  let location = { ...props.location };

  const replace = (data) => {
    location = { ...data };
  };

  if (middlewares) {
    if (typeof middlewares === 'function') {
      middlewares(props, replace);

      return location;
    }

    if (Array.isArray(middlewares)) {
      // eslint-disable-next-line
      for (const middleware of middlewares) {
        middleware(props, replace);
      }

      return location;
    }
  }

  return location;
}

const WithRouter = ({ middleware, component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const to = processMiddleware(middleware, props);
      if (to.pathname !== props.location.pathname) {
        return <Redirect to={to} />;
      }

      return <LayoutDefault {...rest} {...props} component={component} />;
    }}
  />
);

WithRouter.propTypes = {
  component: oneOfType([func, node, shape({})]).isRequired,
  location: shape({
    pathname: string,
  }),
  middleware: oneOfType([func, array]),
};

WithRouter.defaultProps = {
  location: {
    pathname: '',
  },
};

export default WithRouter;
