import React, { Component } from "react";
import ReactImageViewer from "../ReactImageViewer";
import StackGrid from "react-stack-grid";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./imageViewer.scss";

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumImagesUrl: this.props.photosUrl,
      photos: [],
      isOpen: false,
      currImg: 0,
    };
  }

  componentDidMount() {
    axios
      .get(this.state.albumImagesUrl)
      .then((response) => response.data)
      .then((data) => this.setState({ photos: data._embedded.photoDtoList }));
  }

  handleImageClick = (event) => {
    this.setState({
      isOpen: true,
      currImg: event,
    });
  };

  handleImageClose = (event) => {
    this.setState({
      isOpen: false,
    });
  };

  gotoNextImg = (e) => {
    this.setState({
      currImg: this.state.currImg + 1,
    });
  };

  gotoPrevImg = (e) => {
    this.setState({
      currImg: this.state.currImg - 1,
    });
  };

  getImages() {
    const images = [];
    this.state.photos.map((photo) =>
      images.push({ src: photo._links.image.href })
    );
    return images;
  }

  render() {
    const images = this.getImages();
    console.log(this.props.name);
    return (
      <div className="imageViewer">
        <h1 className="title">{this.props.name}</h1>
        <ImageList cols={4}>
          {images.map((item, index) => (
            <ImageListItem key={item.img}>
              <img
                onClick={() => this.handleImageClick(index)}
                src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
                style={{
                  cursor: "pointer",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <ReactImageViewer
          imgs={images}
          isOpen={this.state.isOpen}
          onClose={() => this.handleImageClose()}
          currImg={this.state.currImg}
          onClickPrev={this.gotoPrevImg}
          onClickNext={this.gotoNextImg}
        />
      </div>
    );
  }
}
export default ImageViewer;
