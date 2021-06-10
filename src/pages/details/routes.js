import DetailsPage from './page';

const DetailsRoutes = [
  {
    component: DetailsPage,
    path: '/detalhes/:idProduto',
    exact: false,
  },
];

export default DetailsRoutes;
