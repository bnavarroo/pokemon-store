/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Cart from '~/shared/components/cart';
import CheckoutButton from '~/shared/components/buttons/checkout';
import Sitemap from '~/_config/sitemap';
import { getCurrentCart } from '~/utilities/functions/cart';
import { numberToLocaleString } from '~/utilities/converters';
import { STORE_ATTR_REF } from '~/constants/stores';

import './styles/index.scss';

const HeaderMinicart = () => {
  const history = useHistory();
  const [cartVisible, setCartVisible] = useState(false);
  const { store } = useSelector((state) => state.storeReducer);
  const { carts } = useSelector((state) => state.cartReducer);
  const storeRef = store[STORE_ATTR_REF];
  const currentCart = getCurrentCart(carts, storeRef);

  const hideMinicart = () => setCartVisible(false);

  return (
    <div className="minicart-cmp">
      <div className="minicart-cmp-wrapper centralized">
        <div
          className="position-relative"
          onClick={() => setCartVisible(!cartVisible)}
          aria-hidden="true"
        >
          <FontAwesomeIcon className="minicart-cmp-icon text-white" icon={faShoppingBag} />
          <div className="minicart-cmp-quantity text-white position-absolute centralized rounded-circle __bg-store-primary-dark">{ currentCart.totalItems }</div>
        </div>
      </div>
      <div className={`minicart-cmp-cart-wrapper full-container flex-row justify-content-between ${cartVisible ? 'cart-active' : ''}`}>
        <div className="minicart-cmp-cart-overlay fluid-container-y" onClick={hideMinicart} />
        <div className="minicart-cmp-cart-content fluid-container-y">
          <div className="minicart-cmp-cart-content-header __bg-store-primary-dark">
            Minhas Capturas
          </div>
          <Cart />
          <div className="minicart-cmp-cart-content-footer d-flex flex-column justify-content-around">
            <div className="d-flex align-items-center justify-content-between mb-2 mb-lg-3">
              <div className="minicart-cmp-cart-content-footer-text">Total:</div>
              <b className="minicart-cmp-cart-content-footer-total">{ numberToLocaleString(currentCart.totalCart) }</b>
            </div>
            <CheckoutButton text="Finalizar Capturas" handleClick={() => history.push(Sitemap.CartPage.path, { from: 'HeaderMinicart' })} disabled={currentCart.totalItems === 0} />
            <Button variant="link" onClick={hideMinicart}>Continuar capturando</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMinicart;
