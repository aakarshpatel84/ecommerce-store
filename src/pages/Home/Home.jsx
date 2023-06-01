import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../app/globalSlice";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.global.products);
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => err.message);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container p-2">
      <div className="row gutter-2">
        {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
        {data.map((item) => (
          <div className="col-3 my-2">
            <div class="card h-100">
              <img class="card-img-top h-100" src={item.image} alt="Card cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
