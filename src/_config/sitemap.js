import notFoundSitemap from '~/pages/notFound/sitemap';
import initialPresentationSitemap from '~/pages/initialPresentation/sitemap';
import InitialUserIdentificationSitemap from '~/pages/initialUserIdentification/sitemap';
import initialStoreSelectionSitemap from '~/pages/initialStoreSelection/sitemap';
import catalogSitemap from '~/pages/catalog/sitemap';
import cartSitemap from '~/pages/cart/sitemap';
import DetailsSitemap from '~/pages/details/sitemap';

const Sitemap = {};

[
  notFoundSitemap,
  initialPresentationSitemap,
  InitialUserIdentificationSitemap,
  initialStoreSelectionSitemap,
  catalogSitemap,
  cartSitemap,
  DetailsSitemap,
].forEach((nav) => {
  if (nav.length) {
    nav.forEach((navItem) => { Sitemap[navItem.page] = { ...navItem }; });
  } else {
    Sitemap[nav.page] = { ...nav };
  }
});

export default Sitemap;
