import React from 'react';
import PropTypes from 'prop-types';
import ActionButton, { ACTION_BUTTON_ICON_TYPES } from '~/shared/components/buttons/action';
import PokeballIcon from '~/_assets/img/pokeball-icon.png';

import './styles/index.scss';

const BuyButton = ({ handleClick, text, disabled }) => (
  <ActionButton classRef="btn-buy" icon={PokeballIcon} iconType={ACTION_BUTTON_ICON_TYPES.image} text={text} handleClick={handleClick} disabled={disabled} />
);

BuyButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
BuyButton.defaultProps = { disabled: false };

export default BuyButton;
