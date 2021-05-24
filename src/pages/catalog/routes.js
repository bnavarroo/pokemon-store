import CatalogPage from './page';

const catalogRoutes = [
  {
    component: CatalogPage,
    path: '/catalogo/:filtro?',
    exact: false,
  },
];

export default catalogRoutes;
