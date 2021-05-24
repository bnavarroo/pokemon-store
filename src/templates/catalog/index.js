import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../shared/components/header';
import Footer from '../../shared/components/footer';
import './styles/index.scss';

const CatalogTemplate = ({ children }) => {
  const { store } = useSelector((state) => state.storeReducer);
  return (
    <div className={`catalog-tmp catalog-tmp fluid-container-y d-flex flex-column justify-content-between ${store.type}-store`}>
      <div className="catalog-tmp-content">
        <Header />
        { children }
      </div>
      <Footer />
    </div>
  );
};

CatalogTemplate.propTypes = { children: PropTypes.any.isRequired };

export default CatalogTemplate;
