import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./productDetail.css";
function ProdeuctDetailPage() {
  const { productId } = useParams();
  const data = useSelector((store) => store.global.products);
  let product = data.find((el) => el.id === +productId);
  return (
    <>
      <div className="flex">
        <div>
          <img src={product.image} alt="" width="500px " />
        </div>
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
        </div>
      </div>
    </>
  );
}

export default ProdeuctDetailPage;
