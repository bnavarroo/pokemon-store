import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderSearch from './components/search';
import HeaderChangeInitialOptions from './components/changeInitialOptions';
import HeaderMinicart from './components/minicart';
import Sitemap from '../../../_config/sitemap';
import { STORE_ATTR_REF, STORES } from '../../../constants/stores';
import './styles/index.scss';

const Header = () => {
  const { store } = useSelector((state) => state.storeReducer);
  const { logo } = STORES.filter((s) => s[STORE_ATTR_REF] === store[STORE_ATTR_REF])[0];

  return (
    <>
      <div className="header-cmp-shadow" />
      <header className="header-cmp centralized-y py-2 __bg-store-primary">
        <Container className="centralized-y justify-content-between flex-wrap">
          <div className="header-cmp-logo-wrapper order-2 order-lg-1">
            <Link to={Sitemap.CatalogPage.path}>
              <img className="header-cmp-logo-img img-fluid" src={logo} alt={store.name} title={store.name} />
            </Link>
          </div>
          <div className="header-cmp-search order-4 order-lg-2">
            <HeaderSearch />
          </div>
          <div className="header-cmp-options side-mb-column order-1 order-lg-3">
            <HeaderChangeInitialOptions />
          </div>
          <div className="header-cmp-cart side-mb-column order-3 order-lg-4">
            <HeaderMinicart />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
