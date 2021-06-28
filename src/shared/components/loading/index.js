import React from 'react';
import PropTypes from 'prop-types';
import LoadingIcon from '~/_assets/img/loading.gif';

import './styles/index.scss';

const LoadingComponent = ({ visible, full }) => (
  <div className={`loading-cmp ${full ? 'centralized fixed-top full-container' : ''} ${!visible ? 'invisible' : ''}`}>
    <img src={LoadingIcon} alt="Aguarde..." title="Aguarde..." />
  </div>
);

LoadingComponent.propTypes = {
  visible: PropTypes.bool,
  full: PropTypes.bool,
};
LoadingComponent.defaultProps = {
  visible: false,
  full: true,
};

export default LoadingComponent;
