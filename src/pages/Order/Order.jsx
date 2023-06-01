import React, { useEffect, useState } from "react";
import OrderStyles from "./Order.module.css";
import { AiTwotoneStar } from "react-icons/ai";
import axios from "axios";
function Order() {
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  const handleConfirmPayment = () => {
    alert("Payment Successfull");
  };
  return (
    <>
      <div className={OrderStyles.parent}>
        {cartData.map((item) => (
          <div>
            <img src={item.image} alt="" />
            <p>Title: {item.title} </p>
            <p> {item.rating.rate}</p>
            <h3 className={OrderStyles.price}>Price: ${item.price}</h3>
            <h3 className={OrderStyles.price}> x{item.quantity}</h3>
          </div>
        ))}
        <button className={OrderStyles.confirm} onClick={handleConfirmPayment}>
          Confirm Payment
        </button>
      </div>
    </>
  );
}

export default Order;
