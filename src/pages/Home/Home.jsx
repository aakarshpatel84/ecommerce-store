import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../app/globalSlice";
import { Link } from "react-router-dom";

function Home() {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.global.products);
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => err.message);
  };

  const getCategories = () => {
    axios
      .get(`https://fakestoreapi.com/products/categories/`)
      .then((res) => setCategories(res.data))
      .catch((err) => err.message);
  };
  useEffect(() => {
    getData();
    getCategories();
  }, []);

  const filteredProducts = selected.length
    ? data.filter(({ category }) => selected.includes(category))
    : data;
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  const handleAddToCart = (product) => {
    // dispatch(addToCart(product));
    // product.quantity = 1;
    let isCheck = cartData.filter((el) => el.id === product.id);
    if (isCheck.length > 0) {
      alert("Product is already added");
    } else {
      let newProduct = { ...product, quantity: 1 };
      cartData = [...cartData, newProduct];
      localStorage.setItem("cartData", JSON.stringify(cartData));
    }
  };
  return (
    <>
      <div class="d-flex p-2 justify-content-center">
        <div>
          {categories.map((category) => (
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                // value=""
                id={category}
                value={category}
                checked={selected.includes(category)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelected((sel) => [...sel, category]);
                  } else {
                    setSelected((sel) =>
                      sel.filter((item) => item !== category)
                    );
                  }
                }}
              />
              <label class="form-check-label" for={category}>
                {category}
              </label>
            </div>
          ))}
        </div>
        <div className="container p-2">
          <div className="row gutter-2">
            {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
            {filteredProducts.map((item) => (
              <Link
                className="col-3 my-2"
                style={{ textDecoration: "none", color: "black" }}
                key={item.id}
                to={`/product/${item.id}`}
              >
                <div>
                  <div class="card h-100">
                    <img
                      class="card-img-top h-100"
                      src={item.image}
                      alt="Card cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">${item.price}</p>
                      <button
                        href="#"
                        class="btn btn-primary"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
