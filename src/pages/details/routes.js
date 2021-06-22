import DetailsPage from './page';
import detailsSitemap from './sitemap';

const DetailsRoutes = [
  {
    page: detailsSitemap.page,
    path: `${detailsSitemap.path}/:refProduto`,
    component: DetailsPage,
    exact: false,
  },
];

export default DetailsRoutes;
