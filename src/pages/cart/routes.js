import CartPage from './page';
import cartSitemap from './sitemap';

const cartRoutes = [
  {
    path: cartSitemap.path,
    component: CartPage,
    exact: false,
  },
];

export default cartRoutes;
