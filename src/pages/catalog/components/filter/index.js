import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Sitemap from '~/_config/sitemap';
import { isNullOrUndefined } from '~/utilities/functions/general';

import './styles/index.scss';

const CatalogPageFilter = () => {
  const { filtro } = useParams();
  const history = useHistory();
  const visibleClass = isNullOrUndefined(filtro) ? 'd-none' : '';

  return (
    <Row className={`catalog-filter ${visibleClass}`}>
      <Col className="centralized-y justify-content-center justify-content-lg-between py-2">
        <div>Exibindo resultados filtrados por: <b>{filtro}</b></div>
        <Button variant="link" className="catalog-filter-btn text-danger px-0" onClick={() => history.push(Sitemap.CatalogPage.path, { from: 'Catalog' })}>
          <div className="centralized text-danger">
            <FontAwesomeIcon icon={faTimes} className="me-2" />
            <span>Limpar Filtros</span>
          </div>
        </Button>
      </Col>
    </Row>
  );
};

export default CatalogPageFilter;
