import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import { getPlaceholders } from "../../getPlaceholders";
import PhotoAlbumCard from "../photoAlbumCard/PhotoAlbumCard";

const PhotoAlbumLayout = () => {
  const location = useLocation();
  const { photoAlbumsUrl } = location.state;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const placeholders = getPlaceholders(4, 350);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(photoAlbumsUrl);
        setData(response._embedded.photoAlbumDtoList);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Container className="my-5 center">
        <Row xs={1} md={2} lg={4} className="g-4">
          {loading
            ? placeholders.map((placeholder) => placeholder)
            : data.map((photoAlbum) => (
                <PhotoAlbumCard
                  key={photoAlbum.id}
                  name={photoAlbum.name}
                  photoAlbumPhotos={photoAlbum._links.photos.href}
                  albumCover={photoAlbum.albumCover}
                  albumId={photoAlbum.id}
                />
              ))}
        </Row>
      </Container>
    </div>
  );
};

export default PhotoAlbumLayout;
