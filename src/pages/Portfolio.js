import React, { Component } from "react";
import axios from "axios";
import PhotoSessionsLayout from "../components/Layout/PhotoSessionsLayout";
import { useState } from "react";
import { useEffect } from "react";

const Portfolio = () => {
  const [photoSessions, setPhotoSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `${BASE_URL}/photo-sessions/list`
        );
        setPhotoSessions(response._embedded.photoSessionDtoList);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "#3f4b5b",
          marginTop: "30px",
          fontSize: "40px",
        }}
      >
        Portfolio
      </h1>
      <PhotoSessionsLayout photoSessions={photoSessions} loading={loading} />
    </div>
  );
};

export default Portfolio;
