import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CatalogTemplate from '../../templates/catalog';
import LoadingComponent from '../../shared/components/loading';
import useDetails from './hooks/detailsHook';
import './styles/page.scss';

const DetailsPage = () => {
  const { productDetails, showLoadingComponent } = useDetails();
  const { images, name } = productDetails;
  return (
    <CatalogTemplate>
      {
        images && (
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
