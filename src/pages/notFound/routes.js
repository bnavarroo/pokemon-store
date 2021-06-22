import NotFound from './page';
import notFoundSitemap from './sitemap';

const notFoundRoutes = [
  {
    page: notFoundSitemap.page,
    path: notFoundSitemap.path,
    component: NotFound,
    exact: true,
  },
];

export default notFoundRoutes;
