import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getPlaceholders } from "../getPlaceholders";

const AvatarImage = () => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const placeholders = getPlaceholders(1, 950);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `${BASE_URL}/avatar-images/photographer-id/1`
        );
        setImage(response._links);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getImageLink = () => {
    const self = Object.values(image);
    const href = Object.values(self).map((self) => self.href);
    return href;
  };

  return (
    <div>
      {loading ? (
        placeholders.map((placeholder) => placeholder)
      ) : (
        <img
          className="w-100 shadow-lg p-1 mb-5 bg-white rounded"
          src={getImageLink()}
          alt="About Images"
        />
      )}
    </div>
  );
};

export default AvatarImage;
