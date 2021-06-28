import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CheckoutTemplate from '~/templates/checkout';
import Cart from '~/shared/components/cart';

import CartPageSummary from './components/summary';
import CartPageModal from './components/modal';
import './styles/index.scss';

const CartPage = () => {
  const [showModal, setShowModal] = useState(false);

  const onCheckoutFinish = () => {
    setShowModal(true);
  };

  return (
    <CheckoutTemplate>
      <Container className="cart py-3">
        <h1 className="text-center text-lg-start mb-3 mb-lg-4">Minhas Capturas</h1>
        <Row>
          <Col xs={12} lg={8}>
            <Cart backToCatalog />
          </Col>
          <Col xs={12} lg={4}>
            <CartPageSummary handleFinish={() => onCheckoutFinish()} />
          </Col>
        </Row>
        {
          showModal && (
            <CartPageModal show={showModal} />
          )
        }
      </Container>
    </CheckoutTemplate>
  );
};

export default CartPage;
