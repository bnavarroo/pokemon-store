import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CatalogTemplate from '~/templates/catalog';
import LoadingComponent from '~/shared/components/loading';
import BuyButton from '~/shared/components/buttons/buy';
import { numberToLocaleString } from '~/utilities/converters';

import useDetails from './hooks/detailsHook';
import DetailsPageTabs from './components/tabs';
import './styles/page.scss';

const DetailsPage = () => {
  const {
    productDetails,
    showLoadingComponent,
    inCart,
    addProductInCartFromDetail,
  } = useDetails();

  const { images, name, price, baseExperience, moves, abilities } = productDetails;
  const classCenterTextOnMobile = 'text-center text-md-start';

  return (
    <CatalogTemplate>
      {
        !showLoadingComponent && (
          <Container className="my-3 details">
            <Row>
              <Col md={5} sm={12}>
                <img className="img-fluid" src={images?.main} alt={name} />
                <h5 className={classCenterTextOnMobile}>Miniaturas:</h5>
                {
                  images?.thumbs.map((thumbnail) => (<img className="p-2" src={thumbnail} alt={name} key={thumbnail} />))
                }
              </Col>
              <Col md={7} sm={12}>
                <h1 className={`pb-2 border-bottom text-capitalize ${classCenterTextOnMobile}`}>{name}</h1>
                <div className={`details-experience ${classCenterTextOnMobile}`}>Experiência: {baseExperience}</div>
                <Row className="align-items-center mb-5">
                  <Col md={7} sm={12} className="py-1">
                    <div className={`display-4 ${classCenterTextOnMobile}`}>{numberToLocaleString(price)}</div>
                  </Col>
                  <Col md={5} sm={12} className="py-1">
                    <BuyButton text={inCart ? 'Capturado' : 'Capturar!'} disabled={inCart} handleClick={addProductInCartFromDetail} />
                  </Col>
                </Row>
                <Row className="align-items-center mb-5">
                  <Col>
                    <DetailsPageTabs abilities={abilities} moves={moves} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        )
      }
      <LoadingComponent visible={showLoadingComponent} />
    </CatalogTemplate>
  );
};

export default DetailsPage;
