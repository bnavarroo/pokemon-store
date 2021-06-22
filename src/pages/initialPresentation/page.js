import React from 'react';
import { Link } from 'react-router-dom';

import WelcomeTemplate from '../../templates/welcome';

import INITIAL_PRESENTATION_BUTTONS from './constants';

import './styles/page.scss';

const InitialPresentation = () => (
  <WelcomeTemplate>
    <div className="initial-presentation">
      <h2 className="page-subtitle">Gostaria de se identificar?</h2>
      <div className="d-flex flex-column">
        {
          INITIAL_PRESENTATION_BUTTONS.map((button) => (
            <Link
              key={`initial-presentation-btn-${button.id}`}
              to={button.linkTo}
              className="btn btn-light initial-presentation-btn btn-animated mt-3"
            >
              <b>{ button.strongText}</b>{ button.text }
            </Link>
          ))
        }
      </div>
    </div>
  </WelcomeTemplate>
);

export default InitialPresentation;
