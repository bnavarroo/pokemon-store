import CartPage from './page';
import cartSitemap from './sitemap';

const cartRoutes = [
  {
    page: cartSitemap.page,
    path: cartSitemap.path,
    component: CartPage,
    exact: false,
  },
];

export default cartRoutes;
