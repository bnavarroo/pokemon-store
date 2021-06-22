import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Sitemap from '../../../../../_config/sitemap';
import { stringToUrlParam } from '../../../../../utilities/converters';
import './styles/index.scss';

const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    const urlParam = stringToUrlParam(searchValue);
    history.push(`${Sitemap.CatalogPage.path}/${urlParam}`, { from: 'HeaderSearch' });
  };

  return (
    <div className="header-search-cmp">
      <InputGroup className="header-search-cmp-wrapper">
        <FormControl
          placeholder="Nome do Pokémon"
          className="header-search-cmp-input rounded-0 border-0"
          onKeyUp={(e) => {
            setSearchValue(e.target.value);
            if (e.code === 'Enter' && e.target.value !== '') handleSubmit();
          }}
          defaultValue={searchValue}
        />
        <InputGroup.Append>
          <Button
            variant=""
            className="rounded-0 header-search-cmp-button"
            disabled={searchValue === ''}
            onClick={() => handleSubmit()}
          >
            <FontAwesomeIcon className="header-search-cmp-button-icon" icon={faSearch} />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default HeaderSearch;
