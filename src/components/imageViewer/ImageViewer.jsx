import React from "react";
import ReactImageViewer from "../ReactImageViewer";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./imageViewer.scss";
import { useState } from "react";
import { useEffect } from "react";
import { getPlaceholders } from "../../getPlaceholders";

const ImageViewer = ({ photosUrl, name }) => {
  const [photos, setPhotos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);
  const [loading, setLoading] = useState(true);
  const placeholders = getPlaceholders(20, 300);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(photosUrl);
        setPhotos(response._embedded.photoDtoList);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleImageClick = (index) => {
    setIsOpen(true);
    setCurrImg(index);
  };

  const handleImageClose = (event) => {
    setIsOpen(false);
    setCurrImg(0);
  };

  const gotoNextImg = (e) => {
    setCurrImg(currImg + 1);
  };

  const gotoPrevImg = (e) => {
    setCurrImg(currImg - 1);
  };

  const getImages = () => {
    const images = [];
    photos.map((photo) => images.push(photo._links.image.href));
    return images;
  };

  const images = getImages();
  return (
    <div className="imageViewer">
      <h1 className="title">{name}</h1>
      <ImageList cols={3}>
        {loading
          ? placeholders.map((placeholder) => placeholder)
          : images.map((item, index) => (
              <ImageListItem key={item.img}>
                <img
                  onClick={() => handleImageClick(index)}
                  src={`${item}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  loading="lazy"
                  style={{
                    cursor: "pointer",
                  }}
                />
              </ImageListItem>
            ))}
      </ImageList>
      <ReactImageViewer
        images={images}
        isOpen={isOpen}
        onClose={handleImageClose}
        currImg={currImg}
        onClickPrev={gotoPrevImg}
        onClickNext={gotoNextImg}
      />
    </div>
  );
};
export default ImageViewer;
