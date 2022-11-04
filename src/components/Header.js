import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import logo from "./logo-brand.png";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import AlbumImages from "../pages/AlbumImages";
import Feedback from "../pages/feedback/Feedback";
import Regulations from "../pages/regulations/Regulations";
import PhotoAlbumLayout from "./Layout/PhotoAlbumLayout";
import Offers from "../pages/offers/Offers";
import PageNotFound from "../pages/pageNotFound/PageNotFound";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="md"
          style={{ backgroundColor: "#3f4b5b" }}
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="50"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">O mnie</Nav.Link>
                <Nav.Link href="/photo-sessions">Portfolio</Nav.Link>
                <Nav.Link href="/offers">Oferta</Nav.Link>
                <Nav.Link href="/feedbacks">Opinie</Nav.Link>
                <Nav.Link href="/regulations">Regulamin</Nav.Link>
                <Nav.Link href="/contact">Kontakt</Nav.Link>
              </Nav>
              <Nav className="mr-auto"></Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photo-sessions">
              <Route index element={<Portfolio />} />
              <Route path=":photoSessionId" element={<PhotoAlbumLayout />} />
              <Route
                path="photo-album/:photoAlbumId"
                element={<AlbumImages />}
              />
            </Route>
            <Route path="/offers" element={<Offers />} />
            <Route path="/feedbacks" element={<Feedback />} />
            <Route path="/regulations" element={<Regulations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
