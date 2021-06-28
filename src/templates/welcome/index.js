import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { scrollToTop } from '~/utilities/functions/general';
import Logo from '~/_assets/img/pokemon-logo.png';

import './styles/index.scss';

const WelcomeTemplate = ({ children }) => {
  const { store } = useSelector((state) => state.storeReducer);
  useEffect(() => { scrollToTop(); });

  return (
    <div className={`welcome-tmp ${store.type}-store`}>
      <Container className="welcome-tmp-wrapper fluid-container-y py-3 flex-column centralized">
        <Row className="welcome-tmp-content w-100 text-center">
          <Col xs={12}>
            <div className="welcome-tmp-header text-center mb-5">
              <img src={Logo} alt="" className="welcome-tmp-logo mb-2" />
              <h1 className="welcome-tmp-title">Bem vindo(a) a Pokémon Store!</h1>
            </div>
          </Col>
          { children }
        </Row>
      </Container>
    </div>
  );
};

WelcomeTemplate.propTypes = { children: PropTypes.any.isRequired };

export default WelcomeTemplate;
