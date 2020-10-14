import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Routes
import routes from './routes';
import ReduxContainer from './redux/ReduxContainer';

// Components
import WithRouter from './components/Layout/components/WithRouter';
import InitRequests from './components/InitRequests';

// CSS styles
import 'antd/dist/antd.css';
import './styles/css/global.css';
import './styles/css/forms.css';

function App() {
  return (
    <ReduxContainer>
      <Router>
        <InitRequests />

        <Suspense fallback="...loading">
          <Switch>
            {routes.map((item) => (
              <WithRouter
                key={item.path}
                path={item.path}
                component={item.component}
                exact={item.exact}
              />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </ReduxContainer>
  );
}

export default App;
