import { Col, Container, Row } from "react-bootstrap";
import OfferCard from "../offerCard/OfferCard";
import { getPlaceholders } from "../../getPlaceholders";

const SessionPackageLayout = ({ loading, sessionPackages }) => {
  const placeholders = getPlaceholders(3, 300);
  return (
    <div>
      <Container>
        <Row xs={1} md={1} lg={3}>
          {loading
            ? placeholders.map((placeholder) => placeholder)
            : sessionPackages.map((sessionPackage) => (
                <Col key={sessionPackage.id}>
                  <OfferCard sessionPackage={sessionPackage} />
                </Col>
              ))}
        </Row>
      </Container>
    </div>
  );
};

export default SessionPackageLayout;
