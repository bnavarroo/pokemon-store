import InitialPresentation from './page';
import initialPresentationSitemap from './sitemap';

const initialPresentationRoutes = [
  {
    path: initialPresentationSitemap.path,
    component: InitialPresentation,
    exact: true,
  },
];

export default initialPresentationRoutes;
