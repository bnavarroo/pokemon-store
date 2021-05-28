/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';
import './styles/index.scss';

const PaginationList = ({ totalPages, currentPage, handleClick }) => {
  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage || i === (currentPage - 1) || i === (currentPage + 1)) {
      paginationItems.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          className={`${i === currentPage ? '__bg-store-primary' : ''}`}
          onClick={() => handleClick(i)}
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
            <Pagination.First onClick={() => handleClick(1)}>Primeira</Pagination.First>
            <Pagination.Prev onClick={() => handleClick(currentPage - 1)}>Anterior</Pagination.Prev>
          </>
        )
      }
      {paginationItems}
      {
        currentPage < totalPages && (
          <>
            <Pagination.Next onClick={() => handleClick(currentPage + 1)}>Próxima</Pagination.Next>
            <Pagination.Last onClick={() => handleClick(totalPages)}>Úlltima</Pagination.Last>
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
