import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import LoadingComponent from '../../../../shared/components/loading';
import CatalogPageItemsProduct from './product';
import CatalogAPI from '../../../../shared/api/catalog';
import { isNullOrUndefined } from '../../../../utilities/functions/general';
import { urlParamToString } from '../../../../utilities/converters';
import { STORE_ATTR_REF } from '../../../../constants/stores';
import Pikachu from '../../../../_assets/img/pikachu.png';
import './styles/index.scss';

const CatalogPageItems = () => {
  const { store } = useSelector((state) => state.storeReducer);
  const { filtro } = useParams();
  const history = useHistory();

  const usePreviousStore = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = isNullOrUndefined(value) ? {} : value;
    });
    return ref.current;
  };

  const prevStore = usePreviousStore(store);
  const [list, setList] = useState([]);
  const [showLoadingComponent, setShowLoadingComponent] = useState(true);

  useEffect(() => {
    if (isNullOrUndefined(prevStore)
      || (prevStore[STORE_ATTR_REF] !== store[STORE_ATTR_REF] && isNullOrUndefined(filtro))
      || prevStore[STORE_ATTR_REF] === store[STORE_ATTR_REF]) {
      setShowLoadingComponent(true);
      CatalogAPI.GetItems(store[STORE_ATTR_REF]).then((result) => {
        const items = isNullOrUndefined(filtro)
          ? result
          : result.filter((item) => urlParamToString(item.name.toUpperCase()).indexOf(urlParamToString(filtro.toUpperCase())) !== -1);

        setList(items);
        setShowLoadingComponent(false);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtro, store]);

  useEffect(() => {
    if (!isNullOrUndefined(prevStore) && (prevStore[STORE_ATTR_REF] !== store[STORE_ATTR_REF])) history.replace('/catalogo/');
  }, [history, prevStore, store]);

  return (
    <>
      <Row>
        {
          list.map((product, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={`product-${index}`} id={`product-${product.id}`} className="py-3">
              <CatalogPageItemsProduct product={product} />
            </Col>
          ))
        }
        {
          (list.length === 0 && !isNullOrUndefined(filtro)) && (
            <div className="catalog-no-results centralized flex-column py-3 pt-lg-5 text-center">
              <img src={Pikachu} alt="" className="catalog-no-results-img" />
              <div className="catalog-no-results-title display-4 mt-3 mb-2">Ops...</div>
              <div className="catalog-no-results-text">Não encontramos nenhum um item para a sua busca...<br />Mas não se preocupe! temos muitos pokémons e com certeza você irá encontrar algum que o agrade!</div>
            </div>
          )
        }
      </Row>
      <LoadingComponent visible={showLoadingComponent} />
    </>
  );
};

export default CatalogPageItems;
