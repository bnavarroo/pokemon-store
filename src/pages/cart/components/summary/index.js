import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutButton from '../../../../shared/components/buttons/checkout';
import Sitemap from '../../../../_config/sitemap';
import { getCurrentCart } from '../../../../utilities/functions/cart';
import { numberToLocaleString } from '../../../../utilities/converters';
import { STORE_ATTR_REF } from '../../../../constants/stores';
import './styles/index.scss';

const CartPageSummary = ({ handleFinish }) => {
  const { store } = useSelector((state) => state.storeReducer);
  const { carts } = useSelector((state) => state.cartReducer);
  const storeRef = store[STORE_ATTR_REF];
  const currentCart = getCurrentCart(carts, storeRef);
  const visibleClass = currentCart.totalItems <= 0 ? 'd-none' : '';

  return (
    <div className={`cart-summary px-3 py-4 py-lg-5 mt-3 mt-lg-0 ${visibleClass}`}>
      <h2 className="cart-summary-title text-center mb-3"><b>Resumo das Capturas</b></h2>
      <div className="cart-summary-itens my-3 py-3">
        <div className="cart-summary-itens-qtd centralized-y justify-content-between">
          <div className="cart-summary-itens-qtd-text text-center text-lg-end"><span>Quantidade de </span>Itens:</div>
          <b className="cart-summary-itens-qtd-value">{ currentCart.totalItems }</b>
        </div>
        <div className="cart-summary-itens-total centralized-y justify-content-between mt-2">
          <div className="cart-summary-itens-total-text text-center text-lg-end">Valor Total:</div>
          <b className="cart-summary-itens-total-value">{ numberToLocaleString(currentCart.totalCart) }</b>
        </div>
      </div>
      <div className="cart-summary-buttons">
        <CheckoutButton text="Finalizar Capturas" handleClick={handleFinish} disabled={currentCart.totalItems === 0} />
        <Link to={Sitemap.CatalogPage.path} className="btn btn-link w-100">Capturar mais Pokémon</Link>
      </div>
    </div>
  );
};

CartPageSummary.propTypes = { handleFinish: PropTypes.func.isRequired };

export default CartPageSummary;
