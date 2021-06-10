import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import cartActions from '../../../../../../shared/redux/cart/actions';
import BuyButton from '../../../../../../shared/components/buttons/buy';
import { numberToLocaleString } from '../../../../../../utilities/converters';
import useCatalogItemsProduct from './hooks/catalogItemsProductHook';
import './styles/index.scss';

const CatalogPageItemsProduct = ({ product }) => {
  const dispatch = useDispatch();

  const { storeRef, inCart, image } = useCatalogItemsProduct(product);

  const addItemInCart = () => {
    dispatch(cartActions.updateItemInCartByStore(storeRef, { product: { ...product, image }, quantity: 1 }));
  };

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
          <Link to={`/detalhes/${product.id}`} className="d-table p-3 mt-2 mx-auto">Ver detalhes</Link>
        </div>
      </Card.Footer>
    </Card>
  );
};

CatalogPageItemsProduct.propTypes = { product: PropTypes.object.isRequired };

export default CatalogPageItemsProduct;
