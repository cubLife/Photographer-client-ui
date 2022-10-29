import React from "react";
import { useLocation } from "react-router-dom";
import ImageViewer from "../components/imageViewer/ImageViewer";

export default function AlbumImages() {
  const location = useLocation();
  const { photos } = location.state;
  const { name } = location.state;

  return (
    <div>
      <ImageViewer photosUrl={photos} name={name} />
    </div>
  );
}
