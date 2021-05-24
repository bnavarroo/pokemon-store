import React from 'react';
import { useSelector } from 'react-redux';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import WelcomeTemplate from '../../templates/welcome';
import StoreSelection from '../../shared/components/storeSelection';

import './styles/page.scss';

const InitialStoreSelection = () => {
  const { store } = useSelector((state) => state.storeReducer);
  return (
    <WelcomeTemplate>
      <h2 className="page-subtitle">Quase lá! Agora selecione uma das lojas e boas capturas =)</h2>
      <div className="initial-user-presentation">
        <StoreSelection />
      </div>
      <div className="d-flex justify-content-center flex-column-reverse justify-content-lg-between flex-lg-row mt-4">
        <Link to="/identificacao" className="btn btn-lg btn-link px-0 mt-3 mt-lg-0">Ir para identificação</Link>
        <Link to="/catalogo" className="btn btn-lg __btn-store-primary">Acessar <b>{store.name}</b></Link>
      </div>
    </WelcomeTemplate>
  );
};

export default InitialStoreSelection;
