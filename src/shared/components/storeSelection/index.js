import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { CardGroup, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import storeActions from '../../redux/store/actions';
import { STORES, STORE_ATTR_REF } from '../../../constants/stores';
import './styles/index.scss';

const StoreSelection = ({ handleSetStoreSelected }) => {
  const currentStore = useSelector((state) => state.storeReducer.store);
  const dispatch = useDispatch();

  const isActiveStore = (store) => store[STORE_ATTR_REF] === currentStore[STORE_ATTR_REF];

  return (
    <div className="store-selection-cmp">
      <CardGroup>
        {
          STORES.map((store, index) => (
            <Card
              className={`store-selection-cmp-card py-3 position-relative ${isActiveStore(store) ? 'active' : ''}`}
              key={`store-selection-cmp-card-${index}`}
              onClick={() => {
                dispatch(storeActions.setStoreSelected(store[STORE_ATTR_REF]));
                if (handleSetStoreSelected) handleSetStoreSelected();
              }}
            >
              <Card.Img src={store.logo} className="store-selection-cmp-card-img py-2 mx-auto" />
              <Card.Body className="text-center">
                <Card.Title>{store.name}</Card.Title>
                <Card.Text>
                  {store.description}
                </Card.Text>
              </Card.Body>
              {
                isActiveStore(store) && (<FontAwesomeIcon icon={faCheck} size="lg" className="store-selection-cmp-card-check text-success" />)
              }
            </Card>
          ))
        }
      </CardGroup>
    </div>
  );
};

StoreSelection.propTypes = { handleSetStoreSelected: PropTypes.func };
StoreSelection.defaultProps = { handleSetStoreSelected: () => false };

export default StoreSelection;
