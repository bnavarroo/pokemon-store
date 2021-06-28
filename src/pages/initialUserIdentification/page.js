import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import WelcomeTemplate from '~/templates/welcome';
import UserIdentification from '~/shared/components/userIdentification';
import Sitemap from '~/_config/sitemap';

import PRIMARY_BUTTON_SETTINGS from './constants';
import './styles/page.scss';

const InitialUserIdentification = () => {
  const history = useHistory();

  return (
    <WelcomeTemplate>
      <div className="initial-user-presentation">
        <UserIdentification
          handleSetUserName={() => history.push(Sitemap.InitialStoreSelectionPage.path, { from: 'InitialUserIdentification' })}
          primaryButtonSettings={PRIMARY_BUTTON_SETTINGS}
        >
          <Link
            to="/selecionarLoja"
            className="btn btn-lg btn-link px-0 mt-3 mt-lg-0"
          >
            Mudei de ideia e não quero me identificar agora
          </Link>
        </UserIdentification>
      </div>
    </WelcomeTemplate>
  );
};

export default InitialUserIdentification;
