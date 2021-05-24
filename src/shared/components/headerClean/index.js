import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { STORE_ATTR_REF, STORES } from '../../../constants/stores';
import './styles/index.scss';

const HeaderClean = () => {
  const { store } = useSelector((state) => state.storeReducer);
  const { logo } = STORES.filter((s) => s[STORE_ATTR_REF] === store[STORE_ATTR_REF])[0];

  return (
    <header className="header-clean-cmp py-2 bg-white">
      <Container className="centralized-y justify-content-between">
        <img className="header-clean-cmp-logo" src={logo} alt={store.name} title={store.name} />
        <div className="header-clean-cmp-lock centralized-y">
          <FontAwesomeIcon icon={faLock} className="header-clean-cmp-lock-icon __text-store-primary-dark" />
          <span className="header-clean-cmp-lock-text ms-2">Captura 100% Segura</span>
        </div>
      </Container>
    </header>
  );
};

export default HeaderClean;
