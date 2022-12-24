import axios from "axios";
import React, { useEffect, useState } from "react";
import { getPlaceholders } from "../../getPlaceholders";
import FeedbackCard from "../feedbackCard/FeedbackCard";

const FeedbackLayout = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `${BASE_URL}/feedbacks/list`
        );
        setData(response._embedded.costumerFeedbackDtoList);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const placeholders = getPlaceholders(3, 150);

  return (
    <div>
      {loading
        ? placeholders.map((placeholder) => placeholder)
        : data.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))}
    </div>
  );
};
export default FeedbackLayout;
