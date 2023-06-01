import React, { useEffect, useState } from "react";
import CheckoutStyles from "./Checkout.module.css";
import axios from "axios";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const navigate = useNavigate();
  let [reload, setReload] = useState(false);

  // const productsData = useSelector((store) => store.global.cart);
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

  useEffect(() => {
    cartData = JSON.parse(localStorage.getItem("cartData"));
    console.log("cartData: ", cartData);
  }, [reload]);

  let totalAmount = cartData.reduce(
    (acm, el) => acm + el.quantity * el.price,
    0
  );

  const handleDelete = (ID) => {
    let filterData = cartData.filter((el) => el.id !== ID);
    localStorage.setItem("cartData", JSON.stringify(filterData));
    cartData = JSON.parse(localStorage.getItem("cartData"));
    setReload(!reload);
  };

  const decQuantity = (ID) => {
    let filteredData = cartData.map((el) => {
      if (el.id === ID) {
        return {
          ...el,
          quantity: --el.quantity,
        };
      }
      return el;
    });
    localStorage.setItem("cartData", JSON.stringify(filteredData));
    cartData = JSON.parse(localStorage.getItem("cartData"));
    setReload(!reload);

    // window.location.reload();
  };

  const incQuantity = (ID) => {
    let filteredData = cartData.map((el) => {
      if (el.id === ID) {
        return {
          ...el,
          quantity: ++el.quantity,
        };
      }
      return el;
    });

    localStorage.setItem("cartData", JSON.stringify(filteredData));
    cartData = JSON.parse(localStorage.getItem("cartData"));
    setReload(!reload);

    // window.location.reload();
  };

  return (
    <>
      <section className={CheckoutStyles.parentBox}>
        {cartData?.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.image} alt="" width="100px" />
            </div>
            <div>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
            <button
              className={CheckoutStyles.delete}
              onClick={() => handleDelete(item.id)}
            >
              <MdOutlineDeleteForever size={"30px"} color="red" />
            </button>
            <div className={CheckoutStyles.quantity}>
              <button
                disabled={item.quantity === 0}
                onClick={() => decQuantity(item.id)}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button onClick={() => incQuantity(item.id)}>+</button>
            </div>
          </div>
        ))}
        <h3 className={CheckoutStyles.amt}>
          {" "}
          Total Amount: {totalAmount.toFixed(2)}
        </h3>
        <button
          className={CheckoutStyles.makepay}
          onClick={() => navigate("/order")}
        >
          Complete Payment
        </button>
      </section>
    </>
  );
}

export default Checkout;
