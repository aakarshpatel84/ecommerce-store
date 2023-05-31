import React, { useEffect, useState } from "react";
import "./Order.css";
import { AiTwotoneStar } from "react-icons/ai";
import axios from "axios";
function Order() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => err.message);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="parent">
        {data.map((item) => (
          <div>
            <img src={item.image} alt="" />
            <p>Title: {item.title} </p>
            <p> {item.rating.rate}</p>
            {/* <span>
              <AiTwotoneStar color="yellow" size="20px" />
            </span> */}
            <h3>Price: {item.price}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Order;
