import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import cartActions from '../../../../../../shared/redux/cart/actions';
import BuyButton from '../../../../../../shared/components/buttons/buy';
import { numberToLocaleString } from '../../../../../../utilities/converters';
import { getCurrentCart } from '../../../../../../utilities/functions/cart';
import { STORE_ATTR_REF } from '../../../../../../constants/stores';
import { CART_ITEM_ATTR_REF } from '../../../../../../constants/cart';
import { PRODUCT_IMAGE_NOTFOUND } from '../../../../../../constants/product';
import './styles/index.scss';

const CatalogPageItemsProduct = ({ product }) => {
  const [image, setImage] = useState(PRODUCT_IMAGE_NOTFOUND);
  const { store } = useSelector((state) => state.storeReducer);
  const storeRef = store[STORE_ATTR_REF];
  const dispatch = useDispatch();

  const addItemInCart = () => {
    dispatch(cartActions.updateItemInCartByStore(storeRef, { product: { ...product, image }, quantity: 1 }));
  };

  const [inCart, setInCart] = useState(false);
  const { carts } = useSelector((state) => state.cartReducer);
  const currentCart = getCurrentCart(carts, storeRef);
  useEffect(() => {
    if (currentCart.items.length) {
      const found = currentCart.items.filter((cartitem) => cartitem.product[CART_ITEM_ATTR_REF] === product[CART_ITEM_ATTR_REF]).length > 0;
      setInCart(found);
    } else {
      setInCart(false);
    }
  }, [currentCart, product]);

  useEffect(() => {
    const img = new Image();
    img.src = product.image;
    img.onload = () => setImage(product.image);
    img.onerror = () => setImage(PRODUCT_IMAGE_NOTFOUND);
  }, [product.image]);

  return (
    <Card className="catalog-card border-0 p-2">
      <div className="catalog-card-img-wrapper centralized">
        <Card.Img src={image} className="catalog-card-img" />
      </div>
      <Card.Footer className="text-center bg-white">
        <div className="catalog-card-name text-capitalize">{ product.name }</div>
        <div className="catalog-card-price">{ numberToLocaleString(product.price) }</div>
        <div className="catalog-card-button-wrapper mt-3">
          <BuyButton text={inCart ? 'Capturado' : 'Capturar!'} disabled={inCart} handleClick={() => addItemInCart()} />
        </div>
      </Card.Footer>
    </Card>
  );
};

CatalogPageItemsProduct.propTypes = { product: PropTypes.object.isRequired };

export default CatalogPageItemsProduct;