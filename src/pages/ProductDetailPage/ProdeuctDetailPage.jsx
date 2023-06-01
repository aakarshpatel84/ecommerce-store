import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProdeuctDetailPage() {
  const { productId } = useParams();
  const data = useSelector((store) => store.global.products);
  let product = data.find((el) => el.id === +productId);
  console.log("productId: ", product);
  return <div>ProdeuctDetailPage</div>;
}

export default ProdeuctDetailPage;
