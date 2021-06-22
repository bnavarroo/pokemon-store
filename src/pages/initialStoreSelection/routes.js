import InitialStoreSelection from './page';
import initialStoreSelectionSitemap from './sitemap';

const initialStoreSelectionRoutes = [
  {
    page: initialStoreSelectionSitemap.page,
    path: initialStoreSelectionSitemap.path,
    component: InitialStoreSelection,
    exact: true,
  },
];

export default initialStoreSelectionRoutes;
