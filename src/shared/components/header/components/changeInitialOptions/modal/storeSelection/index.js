import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import StoreSelection from '../../../../../storeSelection';
import './styles/index.scss';

const StoreSelectionModal = ({ show, handleClose }) => {
  const history = useHistory();

  const onSetStoreSelected = () => {
    handleClose();
    const redirectUrl = '/catalogo';
    if (history.location.pathname !== redirectUrl) {
      history.push('/catalogo', { from: 'StoreSelectionModal' });
    }
  };

  return (
    <Modal
      className="header-change-init-opt-modal-cmp modal-store-selection"
      size="lg"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Alterar Loja</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center alert alert-warning">
          Ao clicar em uma das opções de loja você será automaticamente direcionado para a mesma. As informações de carrinho não são perdidas até que uma compra seja finalizada! =)
        </div>
        <StoreSelection handleSetStoreSelected={onSetStoreSelected} />
      </Modal.Body>
    </Modal>
  );
};

StoreSelectionModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default StoreSelectionModal;
