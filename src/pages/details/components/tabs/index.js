import React from 'react';
import PropTypes, { object, string } from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

import DetailsPageTabsTabAbilities from './components/tabAbilities';
import DetailsPageTabsTabMoves from './components/tabMoves';
import './styles/index.scss';

const DetailsPageTabs = ({ abilities, moves }) => {
  const classTabs = 'p-3 border border-top-0';
  return (
    <div className="details-page-tabs">
      <Tabs defaultActiveKey="abilities">
        <Tab eventKey="abilities" title="Habilidades" className={classTabs} disabled={abilities.length === 0}>
          {
            abilities.length > 0 && (
              <DetailsPageTabsTabAbilities abilities={abilities} />
            )
          }
        </Tab>
        <Tab eventKey="moves" title="Movimentos" className={classTabs} disabled={moves.length === 0}>
          {
            moves.length > 0 && (
              <DetailsPageTabsTabMoves moves={moves} />
            )
          }
        </Tab>
      </Tabs>
    </div>
  );
};

DetailsPageTabs.propTypes = {
  abilities: PropTypes.arrayOf(object).isRequired,
  moves: PropTypes.arrayOf(string).isRequired,
};

export default DetailsPageTabs;
