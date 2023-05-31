import React, { useEffect, useState } from "react";
import CheckoutStyles from "./Checkout.module.css";
import axios from "axios";
import { MdOutlineDeleteForever } from "react-icons/md";
function Checkout() {
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
      <section>
        <div className={CheckoutStyles.total}>
          <h2>Total Items: 2</h2>
          <h2>Total Price: $2400</h2>
        </div>
        <div className={CheckoutStyles.riddels}>
          {data.map((item) => (
            <div>
              <img src={item.image} alt="" />
              <p>Title: {item.title} </p>
              <p> {item.rating.rate}</p>
              {/* <span>
              <AiTwotoneStar color="yellow" size="20px" />
            </span> */}
              <h3 className={CheckoutStyles.price}>Price: ${item.price}</h3>
              <div>
                <MdOutlineDeleteForever
                  size="30px"
                  color="red"
                  className={CheckoutStyles.delete}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Checkout;
