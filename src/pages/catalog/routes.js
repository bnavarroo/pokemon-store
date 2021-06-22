import CatalogPage from './page';
import catalogSitemap from './sitemap';

const catalogRoutes = [
  {
    page: catalogSitemap.page,
    path: `${catalogSitemap.path}/:filtro?`,
    component: CatalogPage,
    exact: false,
  },
];

export default catalogRoutes;
