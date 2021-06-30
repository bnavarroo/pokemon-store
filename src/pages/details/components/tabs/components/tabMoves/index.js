import React from 'react';
import PropTypes, { string } from 'prop-types';

import './styles/index.scss';

const DetailsPageTabsTabMoves = ({ moves }) => (
  <ul>
    {
      moves.map((move) => (<li key={`key-${move}`}>{move}</li>))
    }
  </ul>
);

DetailsPageTabsTabMoves.propTypes = { moves: PropTypes.arrayOf(string).isRequired };

export default DetailsPageTabsTabMoves;
