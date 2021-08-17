import React from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardHeader,
  Button,
  Progress,
} from "reactstrap";

import DefaultCard from "../../../components/Utility/DefaultCard/Card";
import backImage from "../Gigs/pexels-photomix-company-95916.jpg";
import Background from "../Gigs/pexels-christina-morillo-1181675.jpeg";
import { useHistory } from "react-router-dom";

// core components

const GidDetail = () => {
  let history = useHistory();
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "320px",
          backgroundImage: "url(" + Background + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* mask bg-gradient-default opacity-8 */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12" md="12">
              <h1 className="display-3 text-white">Execution #132434</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt--6" fluid>
        <div>
          <Row className="gigDetailContainer">
            <Col xs="12" sm="12" md="12" lg="8" className="flex-column">
              <div className="gig-price app-info-section">
                <div className="price-card">
                  <Card
                    body
                    inverse
                    style={{
                      backgroundColor: "#6c6c7f",
                      borderColor: "#6c6c7f",
                    }}
                  >
                    <CardTitle>Cost</CardTitle>
                    <CardText>17,300,00 &euro; (1730 KXT)</CardText>
                  </Card>
                </div>
                <div className="price-card">
                  <Card
                    body
                    inverse
                    style={{
                      backgroundColor: "#6c6c7f",
                      borderColor: "#6c6c7f",
                    }}
                  >
                    <CardTitle>Type</CardTitle>
                    <CardText>Execution in the cloud</CardText>
                  </Card>
                </div>
              </div>

              <div className="full-width app-info-section">
                <DefaultCard title="Details">Detail description</DefaultCard>
              </div>

              <div className="full-width app-info-section">
                <DefaultCard title="Results">will be added later</DefaultCard>
              </div>
            </Col>
            <Col xs="12" sm="12" md="12" lg="4" className="flex-column">
              <div className="full-width app-info-section">
                <DefaultCard
                  title="Order"
                  inverse
                  style={{ backgroundColor: "#32c072", borderColor: "#32c072" }}
                >
                  order info 1
                  <br />
                  order info 2
                </DefaultCard>
              </div>

              <div className="full-width app-info-section">
                <DefaultCard title="Data in this execution">
                  file.csv
                </DefaultCard>
              </div>

              <div className="full-width app-info-section">
                <DefaultCard
                  title="Program code used"
                  inverse
                  style={{ backgroundColor: "#333", borderColor: "#333" }}
                >
                  info 1
                  <br />
                  info 2
                  <br />
                  info 3
                </DefaultCard>
              </div>

              <div className="full-width app-info-section">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={backImage}
                    alt="Card image cap"
                  />
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            history.push(`/admin/profile/profileId`);
                          }}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../../assets/img/theme/team-4-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                      <Button
                        style={{ visibility: "hidden" }}
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Connect
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Message
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0 pt-md-4">
                    <Row>
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-2">
                          <div>
                            <span className="heading">22</span>
                            <span className="description">Previous Job</span>
                          </div>
                          <div>
                            <span className="heading">10 / 10</span>
                            <span className="description">Reputation</span>
                          </div>
                        </div>
                      </div>
                    </Row>
                    <div className="text-center">
                      <h4
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          history.push(`/admin/profile/profileId`);
                        }}
                      >
                        Dr. Oliver Biege
                      </h4>
                      <div className="h5 font-weight-300">
                        Bucharest, Romania
                      </div>
                      <div className="h5 mt-4">For Gig #132434</div>
                      <div className="h5 font-weight-300">
                        Your Selected Data Scientist
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default GidDetail;
