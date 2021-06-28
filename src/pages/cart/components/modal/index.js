import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Sitemap from '~/_config/sitemap';
import cartActions from '~/shared/redux/cart/actions';
import Pikachu from '~/_assets/img/pikachu_smiling.png';

import './styles/index.scss';

const CartPageModal = ({ show }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClose = () => {
    dispatch(cartActions.clearCart());
    history.push(Sitemap.InitialPresentationPage.path, { from: 'CartPageModal' });
  };

  return (
    <Modal
      className="cart-modal-cmp"
      size="lg"
      show={show}
      backdrop="static"
      centered
    >
      <Modal.Header>
        <Modal.Title className="text-center mx-auto">Capturas Finalizadas!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img src={Pikachu} alt="" className="img-fluid" />
        <h2>Capturas realizadas com sucesso!</h2>
        <div className="cart-modal-cmp-text my-3">
          <div>Você provou que é um mestre pokémon e capturou com certeza os melhores! O ginásio que se prepare!</div>
          <div>Clique no botão abaixo para fechar essa janela e reiniciar o processo =)</div>
        </div>
        <div className="py-3">
          <Button variant="primary" onClick={handleClose}>
            Reiniciar Processo
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

CartPageModal.propTypes = { show: PropTypes.bool.isRequired };

export default CartPageModal;
