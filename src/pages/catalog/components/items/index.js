import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LoadingComponent from '~/shared/components/loading';
import PaginationList from '~/shared/components/pagination';
import { isNullOrUndefined } from '~/utilities/functions/general';
import Pikachu from '~/_assets/img/pikachu.png';

import CatalogPageItemsProduct from './components/product';
import useCatalogItems from './hooks/catalogItemsHook';
import './styles/index.scss';

const CatalogPageItems = () => {
  const { listPaginated, filtro, showLoadingComponent, handleChangePage } = useCatalogItems();

  return (
    <>
      <Row>
        {
          listPaginated.items.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} key={`key-product-${product.id}`} id={`product-${product.id}`} className="py-3">
              <CatalogPageItemsProduct product={product} />
            </Col>
          ))
        }
        {
          (listPaginated.items.length === 0 && !isNullOrUndefined(filtro)) && (
            <div className="catalog-no-results centralized flex-column py-3 pt-lg-5 text-center">
              <img src={Pikachu} alt="" className="catalog-no-results-img" />
              <div className="catalog-no-results-title display-4 mt-3 mb-2">Ops...</div>
              <div className="catalog-no-results-text">Não encontramos nenhum um item para a sua busca...<br />Mas não se preocupe! temos muitos pokémons e com certeza você irá encontrar algum que o agrade!</div>
            </div>
          )
        }
      </Row>
      {
        listPaginated.items.length > 0 && (
          <div className="centralized">
            <PaginationList totalPages={listPaginated.totalPages} currentPage={listPaginated.page} handleClick={(page) => handleChangePage(page)} />
          </div>
        )
      }
      <LoadingComponent visible={showLoadingComponent} />
    </>
  );
};

export default CatalogPageItems;
