import React, { useState } from 'react';
import PropTypes, { object } from 'prop-types';
import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './styles/index.scss';

const DetailsPageTabsTabAbilities = ({ abilities }) => {
  const [currentAccordionActive, setCurrentAccordionActive] = useState({});

  return (
    <Accordion className="tab-abilities">
      {
        abilities.map((abilitie) => (
          <div key={abilitie.id} className="tab-abilities-content">
            <Accordion.Toggle
              as="div"
              eventKey={abilitie.id}
              onClick={() => { setCurrentAccordionActive(currentAccordionActive.id === abilitie.id ? {} : abilitie); }}
              className="centralized-y justify-content-between py-2 tab-abilities-content-title"
            >
              <b className="text-capitalize">{abilitie.name}</b>
              <FontAwesomeIcon icon={currentAccordionActive.id === abilitie.id ? faMinus : faPlus} className="tab-abilities-content-title-icon" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={abilitie.id}>
              <div>
                {
                  abilitie.effect_entries.length > 0 && (
                    abilitie.effect_entries.map((description) => (
                      <div key={`effect_${abilitie.key}`}>
                        {description.effect}
                      </div>
                    ))
                  )
                }
                {
                  abilitie.effect_entries.length === 0 && (<div>Nenhum efeito.</div>)
                }
              </div>
            </Accordion.Collapse>
          </div>
        ))
      }
    </Accordion>
  );
};

DetailsPageTabsTabAbilities.propTypes = { abilities: PropTypes.arrayOf(object).isRequired };

export default DetailsPageTabsTabAbilities;
