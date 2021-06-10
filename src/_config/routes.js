import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import notFoundRoutes from '../pages/notFound/routes';
import initialPresentationRoutes from '../pages/initialPresentation/routes';
import InitialUserIdentificationRoutes from '../pages/initialUserIdentification/routes';
import initialStoreSelectionRoutes from '../pages/initialStoreSelection/routes';
import catalogRoutes from '../pages/catalog/routes';
import cartRoutes from '../pages/cart/routes';
import DetailsRoutes from '../pages/details/routes';

const allRoutes = [
  ...notFoundRoutes,
  ...initialPresentationRoutes,
  ...InitialUserIdentificationRoutes,
  ...initialStoreSelectionRoutes,
  ...catalogRoutes,
  ...cartRoutes,
  ...DetailsRoutes,
];

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {
        allRoutes.map((route, index) => <Route key={`route_${index}`} exact={route.exact} path={route.path} component={route.component} />)
      }
      <Redirect to={notFoundRoutes[0].path} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
