import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import ActionButton, { ACTION_BUTTON_ICON_TYPES } from '~/shared/components/buttons/action';

import './styles/index.scss';

const CheckoutButton = ({ handleClick, text, disabled }) => (
  <ActionButton Button classRef="btn-checkout" iconType={ACTION_BUTTON_ICON_TYPES.fontAwesome} text={text} handleClick={handleClick} disabled={disabled}>
    <FontAwesomeIcon icon={faCheck} />
  </ActionButton>
);

CheckoutButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
CheckoutButton.defaultProps = { disabled: false };

export default CheckoutButton;
