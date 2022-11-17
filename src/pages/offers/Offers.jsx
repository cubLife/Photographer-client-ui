import React, { useState } from "react";
import { useEffect } from "react";
import SessionPackageLayout from "../../components/Layout/SessionPackageLayout";
import axios from "axios";
import "./offers.scss";

const Offers = () => {
  const [data, setData] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `${BASE_URL}/photo-session-packages/list`
        );
        setData(response._embedded.photoSessionPackageDtoList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="title">Dostępne pakiety</div>
      <SessionPackageLayout sessionPackages={data} />
    </div>
  );
};

export default Offers;
