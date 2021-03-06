import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import {CssBaseline} from "@material-ui/core";

import Header from "../pages/header.js";
import MainFooter from "../components/layout/MainFooter";



const AnalyticsHome = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      <CssBaseline/>
      <Header />
        <Col
          className="main-content p-0"
          lg={{ size: 0, offset: 0 }}
          md={{ size: 0, offset: 0 }}
          sm="12"
          tag="main"
        >
          {!noNavbar && <Header />}
          {children}
          {!noFooter && <MainFooter/>}
        </Col>
        
    </Row>
  </Container>
);

AnalyticsHome.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

AnalyticsHome.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default AnalyticsHome;
