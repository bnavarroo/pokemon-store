import CatalogPage from './page';
import catalogSitemap from './sitemap';

const catalogRoutes = [
  {
    page: catalogSitemap[0].page,
    path: `${catalogSitemap[0].path}/:page/:filtro?`,
    component: CatalogPage,
    exact: true,
  },
  {
    page: catalogSitemap[1].page,
    path: `${catalogSitemap[1].path}/:filtro?`,
    component: CatalogPage,
    exact: false,
  },
];

export default catalogRoutes;
