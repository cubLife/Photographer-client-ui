import React, { useState } from "react";
import { useEffect } from "react";
import SessionPackageLayout from "../../components/Layout/SessionPackageLayout";
import axios from "axios";
import "./offers.scss";

const Offers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:8081/api/photo-session-packages/list"
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
