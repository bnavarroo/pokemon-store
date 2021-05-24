import React from 'react';
import { Container } from 'react-bootstrap';
import CatalogTemplate from '../../templates/catalog';
import CatalogPageFilter from './components/filter';
import CatalogPageItems from './components/items';
import './styles/index.scss';

const CatalogPage = () => (
  <CatalogTemplate>
    <div className="catalog catalog-tmp-page">
      <Container>
        <CatalogPageFilter />
        <CatalogPageItems />
      </Container>
    </div>
  </CatalogTemplate>
);

export default CatalogPage;
