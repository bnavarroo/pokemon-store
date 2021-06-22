import DetailsPage from './page';
import detailsSitemap from './sitemap';

const DetailsRoutes = [
  {
    path: `${detailsSitemap.path}/:refProduto`,
    component: DetailsPage,
    exact: false,
  },
];

export default DetailsRoutes;
