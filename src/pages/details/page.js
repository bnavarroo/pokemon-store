import React from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import CatalogTemplate from '../../templates/catalog';
import LoadingComponent from '../../shared/components/loading';
import BuyButton from '../../shared/components/buttons/buy';
import useDetails from './hooks/detailsHook';
import './styles/page.scss';

const DetailsPage = () => {
  const {
    productDetails,
    showLoadingComponent,
    inCart,
    addProductInCartFromDetail,
  } = useDetails();

  const { images, name, baseExperience, moves, abilities } = productDetails;
  const classTabs = 'p-3 border border-top-0';

  return (
    <CatalogTemplate>
      {
        !showLoadingComponent && (
          <Container className="my-3">
            <Row>
              <Col md={5} sm={12}>
                <img className="img-fluid" src={images?.main} alt={name} />
                <h5>Miniaturas:</h5>
                {
                  images?.thumbs.map((thumbnail) => (<img className="p-2" src={thumbnail} alt={name} key={thumbnail} />))
                }
              </Col>
              <Col md={7} sm={12}>
                <h1 className="pb-2 border-bottom text-capitalize">{name}</h1>
                <div>Experiência: {baseExperience}</div>
                <BuyButton text={inCart ? 'Capturado' : 'Capturar!'} disabled={inCart} handleClick={addProductInCartFromDetail} />
                <Tabs defaultActiveKey="abilities">
                  <Tab eventKey="abilities" title="Habilidades" className={classTabs}>
                    <div>{JSON.stringify(abilities)}</div>
                  </Tab>
                  <Tab eventKey="moves" title="Movimentos" className={classTabs}>
                    <div>Ataques/Movimentos:</div>
                    <ul>
                      {
                        moves.map((move) => (<li key={`key-${move}`}>{move}</li>))
                      }
                    </ul>
                  </Tab>
                </Tabs>
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
