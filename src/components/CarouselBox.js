import React, { Component } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";

export default class CarouselBox extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    axios
      .get(`${BASE_URL}/api/carousel-images/list`)
      .then((response) => response.data)
      .then((data) =>
        this.setState({ images: data._embedded.carouselImageDtoList })
      );
  }

  render() {
    return (
      <div>
        <Carousel>
          {this.state.images.map((image) => (
            <Carousel.Item>
              <img
                className="d-blok w-100 shadow-3"
                src={image._links.image.href}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}
