import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import UserIdentification from '../../../../../userIdentification';
import './styles/index.scss';

const UserIdentificationModal = ({ show, handleClose }) => (
  <Modal
    className="header-change-init-opt-modal-cmp modal-user-identfication"
    show={show}
    onHide={handleClose}
  >
    <Modal.Header closeButton>
      <Modal.Title>Identificação</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <UserIdentification
        handleSetUserName={handleClose}
        primaryButtonSettings={{
          btnVariant: 'primary',
          btnClassName: 'btn-animated',
          btnSize: 'md',
          btnText: 'Salvar',
        }}
      />
    </Modal.Body>
  </Modal>
);

UserIdentificationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default UserIdentificationModal;
