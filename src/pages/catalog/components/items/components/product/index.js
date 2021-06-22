import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import BuyButton from '../../../../../../shared/components/buttons/buy';
import Sitemap from '../../../../../../_config/sitemap';
import { numberToLocaleString } from '../../../../../../utilities/converters';
import useCatalogItemsProduct from './hooks/catalogItemsProductHook';
import './styles/index.scss';

const CatalogPageItemsProduct = ({ product }) => {
  const { inCart, imageOnError, addProductInCartFromCatalog } = useCatalogItemsProduct(product);

  return (
    <Card className="catalog-card border-0 p-2">
      <div className="catalog-card-img-wrapper centralized">
        <Card.Img
          src={product.image}
          onError={(e) => imageOnError(e)}
          className="catalog-card-img"
        />
      </div>
      <Card.Footer className="text-center bg-white">
        <div className="catalog-card-name text-capitalize">{ product.name }</div>
        <div className="catalog-card-price">{ numberToLocaleString(product.price) }</div>
        <div className="catalog-card-button-wrapper mt-3">
          <BuyButton text={inCart ? 'Capturado' : 'Capturar!'} disabled={inCart} handleClick={addProductInCartFromCatalog} />
          <Link to={`${Sitemap.DetailsPage.path}/${product.id}`} className="d-table p-3 mt-2 mx-auto">Ver detalhes</Link>
        </div>
      </Card.Footer>
    </Card>
  );
};

CatalogPageItemsProduct.propTypes = { product: PropTypes.object.isRequired };

export default CatalogPageItemsProduct;
