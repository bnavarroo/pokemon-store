import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import userActions from '~shared/redux/user/actions';

const UserIdentification = ({ handleSetUserName, primaryButtonSettings, children }) => {
  const initialValue = useSelector((state) => state.userReducer.userName);
  const [inputValue, setInputValue] = useState(initialValue);
  const dispatch = useDispatch();
  const { btnVariant, btnClassName, btnSize, btnText } = primaryButtonSettings;

  const handleSubmit = () => {
    if (inputValue !== '') dispatch(userActions.setName(inputValue));
    handleSetUserName();
  };

  return (
    <div className="user-identification-cmp">
      <FormGroup>
        <FormLabel className="user-identification-cmp-label">Por favor, digite no campo abaixo como gostaria de ser chamado:</FormLabel>
        <FormControl
          className="user-identification-cmp-input"
          onChange={(e) => setInputValue(e.target.value)}
          defaultValue={inputValue}
        />
      </FormGroup>
      <div className="user-identification-cmp-buttons">
        <Button
          disabled={inputValue === ''}
          variant={btnVariant ?? ''}
          className={btnClassName ?? ''}
          size={btnSize ?? ''}
          onClick={() => handleSubmit()}
        >
          {btnText}
        </Button>
        { children }
      </div>
    </div>
  );
};

UserIdentification.propTypes = {
  handleSetUserName: PropTypes.func.isRequired,
  primaryButtonSettings: PropTypes.object.isRequired,
  children: PropTypes.any,
};

UserIdentification.defaultProps = { children: <></> };

export default UserIdentification;
