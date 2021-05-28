/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';
import './styles/index.scss';

const PaginationList = ({ totalPages, currentPage, handleClick }) => {
  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <Pagination.Item key={i} active={i === currentPage} onClick={() => handleClick(i)}>{i}</Pagination.Item>,
    );
  }
  return (
    <Pagination>{paginationItems}</Pagination>
  );
};

PaginationList.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PaginationList;
