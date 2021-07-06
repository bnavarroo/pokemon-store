import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Sitemap from '~/_config/sitemap';

import './styles/index.scss';

const DetailsPageProductNotFound = () => (
  <div className="details-page-product-not-found text-center p-3">
    <h1 className="details-page-product-not-found-title display-2">Ops...</h1>
    <h3 className="details-page-product-not-found-subtitle my-4">Parece que o produto que você está buscando não existe nessa loja.</h3>
    <Link to={Sitemap.CatalogPage.path} className="details-page-product-not-found-link d-table mx-auto">
      <Button className="centralized __btn-store-primary-dark">
        <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
        Voltar para o catálogo
      </Button>
    </Link>
  </div>
);

export default DetailsPageProductNotFound;
