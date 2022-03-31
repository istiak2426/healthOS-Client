import { useState, useEffect } from "react";
import Layout from "../Layout";
import Card from "./Card";
import { showError, showSuccess } from "../../utils/messages";
import { getCategories, getProducts } from "../../api/apiProduct";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [value, setValue] = useState("");

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => setError("Failed to load products!"));

    getCategories()
      .then((response) => setCategories(response.data))
      .catch((err) => setError("Failed to load categories!"));
  }, []);

  return (
    <Layout title="Home Page" className="container-fluid">
      <div class="col-md-6 col-lg-6 col-11 mx-auto my-auto search-box">
        <h1>Products</h1>
        <br />
        <div class="input-group form-container">
          <input
            type="text"
            name="search"
            class="form-control search-input"
            placeholder="Search by product name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autofocus="autofocus"
            autocomplete="off"
          />
        </div>
      </div>

      <br />

      <div style={{ width: "100%" }}>
        {showError(error, error)}
        {showSuccess(success, "Added to cart successfully!")}
      </div>
      <div className="row">
        {products &&
          products
            .filter((v) => {
              return v.name.toLowerCase().includes(value.toLowerCase());
            })
            .map((product) => <Card product={product} key={product._id} />)}
      </div>
    </Layout>
  );
};

export default Home;
