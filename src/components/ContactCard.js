import React from "react";
import { Card, Spinner } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ContactCard = () => {
  const [photographer, setPhotographer] = useState({});
  const [loading, setLoading] = useState(true);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `${BASE_URL}/photographers/1`
        );
        setPhotographer(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // componentDidMount() {
  //   const BASE_URL = process.env.REACT_APP_BASE_URL;
  //   axios
  //     .get(`${BASE_URL}/photographers/1`)
  //     .then((response) => response.data)
  //     .then((data) => this.setState({ photographer: data }));
  // }

  return (
    <div>
      <Card border="light" className="mt-3 shadow-lg p-1 mb-5 bg-white right">
        <Card.Body>
          <Card.Title>
            <i class="bi bi-telephone-outbound" />
            {loading ? (
              <Spinner animation="border" variant="info" size="sm" />
            ) : (
              <a
                href={"tel:" + photographer.phone}
                className="text-black text-decoration-none"
              >
                {" "}
                {"  " + photographer.phone}
              </a>
            )}
          </Card.Title>
          <Card.Title>
            <i class="bi bi-envelope" />
            {loading ? (
              <Spinner animation="border" variant="info" size="sm" />
            ) : (
              <a
                href={"mailto:" + photographer.email}
                className="text-black text-decoration-none text-reset"
              >
                {"  " + photographer.email}
              </a>
            )}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ContactCard;
