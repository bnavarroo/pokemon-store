import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderClean from '../../shared/components/headerClean';
import Footer from '../../shared/components/footer';
import './styles/index.scss';

const CheckoutTemplate = ({ children }) => {
  const { store } = useSelector((state) => state.storeReducer);
  return (
    <div className={`checkout-tmp checkout-tmp fluid-container-y d-flex flex-column justify-content-between ${store.type}-store`}>
      <HeaderClean />
      <div className="checkout-tmp-content">
        { children }
      </div>
      <Footer />
    </div>
  );
};

CheckoutTemplate.propTypes = { children: PropTypes.any.isRequired };

export default CheckoutTemplate;
