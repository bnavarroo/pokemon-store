import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import cartActions from '../../../../redux/cart/actions';
import { numberToLocaleString } from '../../../../../utilities/converters';
import { CART_ITEM_ATTR_REF } from '../../../../../constants/cart';
import './styles/index.scss';

const TableCart = ({ items, storeRef }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = useMemo(() => (product) => {
    dispatch(cartActions.removeItemFromCartByStore(storeRef, product[CART_ITEM_ATTR_REF]));
  }, [dispatch, storeRef]);

  const updateQtdItem = useMemo(() => (product, quantity) => {
    dispatch(cartActions.updateItemInCartByStore(storeRef, { product, quantity }));
  }, [dispatch, storeRef]);

  return (
    <>
      <div className="cart-cmp-header pb-2">
        <div className="cart-cmp-items-header-produto cart-cmp-col col-prod">Produto</div>
        <div className="cart-cmp-items-header-qtd cart-cmp-col col-qtd">Quant.</div>
        <div className="cart-cmp-items-header-unitario cart-cmp-col col-unit">(R$) Unit.</div>
        <div className="cart-cmp-items-header-total cart-cmp-col col-tot">(R$) Total</div>
        <div className="cart-cmp-items-header-delete cart-cmp-col col-del">&nbsp;</div>
      </div>
      <div className="cart-cmp-items py-2">
        {
          items.map((cartItem) => (
            <Row className="cart-cmp-item w-100 mx-0" key={`cart-item-${cartItem.product.id}`}>
              <Col className="cart-cmp-item-row px-0 mx-0">
                <div className="cart-cmp-col col-prod">
                  <div className="cart-cmp-item-img">
                    <img className="img-fluid" src={cartItem.product.image} alt={cartItem.product.name} />
                  </div>
                  <div className="cart-cmp-item-name text-capitalize">
                    {cartItem.product.name}<br />
                    <small className="cart-cmp-item-name-cod">cod.: {cartItem.product.id}</small>
                  </div>
                </div>
                <div className="cart-cmp-col col-qtd">
                  <div className="cart-cmp-item-price-qtd">
                    <div className="cart-cmp-item-price-qtd-wrapper centralized-y justify-content-around mx-auto my-3 my-md-0">
                      <Button variant="" className="cart-cmp-item-price-qtd-btn p-0 py-2" disabled={cartItem.quantity === 1} onClick={() => updateQtdItem(cartItem.product, -1)}><b>-</b></Button>
                      <span>{ cartItem.quantity}</span>
                      <Button variant="" className="cart-cmp-item-price-qtd-btn p-0 py-2" onClick={() => updateQtdItem(cartItem.product, 1)}><b>+</b></Button>
                    </div>
                  </div>
                </div>
                <div className="cart-cmp-col col-unit">
                  <div className="cart-cmp-item-price-unit">{ numberToLocaleString(cartItem.product.price)}</div>
                </div>
                <div className="cart-cmp-col col-tot">
                  <div className="cart-cmp-item-price-total">{ numberToLocaleString(cartItem.quantity * cartItem.product.price)}</div>
                </div>
                <div className="cart-cmp-col col-del">
                  <Button variant="link" className="p-0 cart-cmp-item-delete text-danger" onClick={() => removeItemFromCart(cartItem.product)}>
                    <FontAwesomeIcon icon={faTimes} className="text-danger" />
                    <span className="cart-cmp-item-delete-text ms-2">Remover</span>
                  </Button>
                </div>
              </Col>
            </Row>
          ))
        }
      </div>
    </>
  );
};

TableCart.propTypes = {
  items: PropTypes.array.isRequired,
  storeRef: PropTypes.number.isRequired,
};

export default TableCart;
