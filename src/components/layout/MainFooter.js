import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Nav, NavItem, NavLink } from "shards-react";
import { Link } from "react-router-dom";

const MainFooter = ({ contained, menuItems, copyright }) => (
  <footer className="main-footer d-flex p-2 px-3 bg-blue border-top">
    <Container fluid={contained}>
      <Row>
        <Nav>
          {menuItems.map((item, idx) => (
            <NavItem key={idx}>
              <NavLink tag={Link} to={item.to}>
                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
      </Row>
    </Container>
  </footer>
);

MainFooter.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,
  /**
   * The menu items array.
   */
  menuItems: PropTypes.array,
  /**
   * The copyright info.
   */
  copyright: PropTypes.string
};

MainFooter.defaultProps = {
  contained: true,
  copyright: "Copyright © 2021 Analytics",
  menuItems: [
    {
      title: "Home",
      to: '/home'
    },
    {
      title: "Services",
      to: "/services"
    },
    {
      title: "About",
      to: "/about"
    },
    {
      title: "Products",
      to: "/products"
    },
    {
      title: "Blog",
      to: "/"
    },
    {
      title: "Terms & Conditions",
      to: "/terms"
    },
    {
      title: "Feedback",
      to: "/discussions"
    }
  ]
};

export default MainFooter;
