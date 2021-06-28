import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getCurrentCart } from '~/utilities/functions/cart';
import { STORE_ATTR_REF } from '~/constants/stores';

import TableCart from './components/table';
import EmptyCart from './components/empty';
import './styles/index.scss';

const Cart = ({ backToCatalog }) => {
  const { store } = useSelector((state) => state.storeReducer);
  const { carts } = useSelector((state) => state.cartReducer);
  const storeRef = store[STORE_ATTR_REF];
  const currentCart = getCurrentCart(carts, storeRef);

  return (
    <div className="cart-cmp">
      {
        currentCart.items.length > 0 && (
          <TableCart storeRef={storeRef} items={currentCart.items} />
        )
      }
      {
        currentCart.items.length === 0 && (
          <EmptyCart showBtnBack={backToCatalog} />
        )
      }
    </div>
  );
};

Cart.propTypes = { backToCatalog: PropTypes.bool };
Cart.defaultProps = { backToCatalog: false };

export default Cart;
