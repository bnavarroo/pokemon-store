import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sitemap from '../../../../../_config/sitemap';
import './styles/index.scss';

const CartEmpty = ({ showBtnBack }) => (
  <div className="cart-cmp-empty text-center text-lg-start">
    <div className="cart-cmp-empty-title">Ops...</div>
    <div className="cart-cmp-empty-text">Parece que você ainda não capturou nenhum Pokémon</div>
    {
      showBtnBack && (
        <Link to={Sitemap.CatalogPage.path} className="btn btn-link px-0">Voltar para o catálogo</Link>
      )
    }
  </div>
);

CartEmpty.propTypes = { showBtnBack: PropTypes.bool };
CartEmpty.defaultProps = { showBtnBack: false };

export default CartEmpty;
