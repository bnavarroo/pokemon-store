import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './styles/index.scss';

export const ACTION_BUTTON_ICON_TYPES = {
  fontAwesome: 'fa',
  image: 'img',
};

const ActionButton = ({ handleClick, icon, iconType, text, classRef, disabled, children }) => (
  <Button variant="" className={`w-100 btn-action __btn-store-primary-dark ${classRef}`} onClick={handleClick} disabled={disabled}>
    <div className="d-flex centralized">
      <div className="btn-action-icon me-2">
        { iconType === ACTION_BUTTON_ICON_TYPES.image && (<img src={icon} alt="" className="btn-action-icon-img" />) }
        { children }
      </div>
      <span className="btn-action-text">{ text }</span>
    </div>
  </Button>
);

ActionButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.any,
  iconType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classRef: PropTypes.string,
  children: PropTypes.any,
  disabled: PropTypes.bool,
};
ActionButton.defaultProps = {
  icon: '',
  children: <></>,
  classRef: '',
  disabled: false,
};

export default ActionButton;
