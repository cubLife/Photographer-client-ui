import React, { useState } from "react";
import { useEffect } from "react";
import SessionPackageLayout from "../../components/Layout/SessionPackageLayout";
import axios from "axios";
import "./offers.scss";

const Offers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `${BASE_URL}/photo-session-packages/list`
        );
        setData(response._embedded.photoSessionPackageDtoList);
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
      <div className="title">Dostępne pakiety</div>
      <SessionPackageLayout sessionPackages={data} loading={loading} />
    </div>
  );
};

export default Offers;
