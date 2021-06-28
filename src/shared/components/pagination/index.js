/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';
import { scrollToTop } from '~/utilities/functions/general';

import './styles/index.scss';

const PaginationList = ({ totalPages, currentPage, handleClick }) => {
  const goToPage = (page) => {
    scrollToTop();
    handleClick(page);
  };

  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage || i === (currentPage - 1) || i === (currentPage + 1)) {
      paginationItems.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          className={`${i === currentPage ? '__bg-store-primary' : ''}`}
          onClick={() => goToPage(i)}
        >
          {i}
        </Pagination.Item>,
      );
    }
  }

  return (
    <Pagination className="pagination-cmp my-3">
      {
        currentPage > 1 && (
          <>
            <Pagination.First onClick={() => goToPage(1)}>Primeira</Pagination.First>
            <Pagination.Prev onClick={() => goToPage(currentPage - 1)} className="d-none d-sm-flex">Anterior</Pagination.Prev>
          </>
        )
      }
      {paginationItems}
      {
        currentPage < totalPages && (
          <>
            <Pagination.Next onClick={() => goToPage(currentPage + 1)} className="d-none d-sm-flex">Próxima</Pagination.Next>
            <Pagination.Last onClick={() => goToPage(totalPages)}>Úlltima</Pagination.Last>
          </>
        )
      }
    </Pagination>
  );
};

PaginationList.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PaginationList;
