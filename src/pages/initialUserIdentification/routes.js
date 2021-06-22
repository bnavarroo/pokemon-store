import InitialUserIdentification from './page';
import initialUserIdentificationSitemap from './sitemap';

const InitialUserIdentificationRoutes = [
  {
    page: initialUserIdentificationSitemap.page,
    path: initialUserIdentificationSitemap.path,
    component: InitialUserIdentification,
    exact: true,
  },
];

export default InitialUserIdentificationRoutes;
