import { Redirect, Route, Switch } from 'react-router-dom';
import { routes } from './RouterConfig';

function Router() {
  const isSignIn = true;

  return (
    <Switch>
      {routes.map((route) => {
        if (route.auth && !isSignIn) {
          return <Redirect key="redirect" to="/" />;
        }

        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
      })}
      <Route path="*" exact component={() => <div>not found</div>} />
    </Switch>
  );
}

export default Router;
