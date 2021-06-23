import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { OverlayTrigger, Popover, Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import UserIdentificationModal from './modal/userIdentification';
import StoreSelectionModal from './modal/storeSelection';
import './styles/index.scss';

const HeaderChangeInitialOptions = () => {
  const { userName } = useSelector((state) => state.userReducer);
  const [showModalStore, setShowModalStore] = useState(false);
  const [showModalUser, setShowModalUser] = useState(false);
  const firstName = userName !== '' ? (userName.split(' ')[0] ?? userName) : 'Visitante';

  return (
    <div>
      <OverlayTrigger
        trigger="focus"
        key="bottom"
        placement="bottom"
        className="header-change-init-opt-cmp"
        overlay={(
          <Popover id="header-change-init-opt-cmp-popover" className="header-change-init-opt-cmp-popover">
            <Popover.Content>
              <ListGroup className="border-0">
                <ListGroup.Item className="border-0 px-lg-5" onClick={() => setShowModalUser(true)}>Identificação</ListGroup.Item>
                <ListGroup.Item className="border-0 px-lg-5" onClick={() => setShowModalStore(true)}>Trocar Loja</ListGroup.Item>
              </ListGroup>
            </Popover.Content>
          </Popover>
          )}
      >
        <Button variant="" className="centralized">
          <FontAwesomeIcon className="header-change-init-opt-cmp-icon text-white" icon={faUser} />
          <div className="header-change-init-opt-cmp-text text-start text-white d-none d-lg-block mx-2">Seja bem vindo<br /> <b>{ firstName } !</b></div>
          <FontAwesomeIcon className="text-white" icon={faAngleDown} />
        </Button>
      </OverlayTrigger>
      {
        showModalStore && (
          <StoreSelectionModal show={showModalStore} handleClose={() => setShowModalStore(false)} />
        )
      }

      {
        showModalUser && (
          <UserIdentificationModal show={showModalUser} handleClose={() => setShowModalUser(false)} />
        )
      }
    </div>
  );
};

export default HeaderChangeInitialOptions;
