import { useState, useEffect } from "react";
import Layout from "../Layout";
import Card from "./Card";
import { showError, showSuccess } from "../../utils/messages";
import { getCategories, getProducts } from "../../api/apiProduct";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./home.css";

import Footer from "../sticky_nav/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [value, setValue] = useState("");

  const [change, setChange] = useState("");


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

  const prod = products.filter((v) => {
    return v.name.toLowerCase().includes(value.toLowerCase());
  }).map((product) => <Card product={product} key={product._id} />)

  const cat = categories.map((c)=>{
    return (<>
    <h2>Category name : {c.name}</h2></>)
  })


  const handleCatalogue = (name) =>{
    setChange(name);

  }


  console.log(change);


  let list = (
    <>{prod}</>
    );
  if(change === 'products'){
    list = (
    <>{prod}</>
    )

  }

  else if (change === 'categories'){
    list = (
    <>
    {cat}
    </>)
  }





  return (
    <div className="home">
   

      <div className="container-fuild prodHead">
        <div className="row  pt-4">
          <div className="col-md-10 col-lg-10 col-10 mx-auto my-auto tranheadText">
            <h1>Catalogue</h1>
          </div>
          <div className="col-md-2 col-lg-2 col-2 mx-auto my-auto tranRight">
            <SearchOutlinedIcon
              fontSize="large"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        <div className="row  pt-4">
          <button
            className="col-md-6 col-lg-6 col-6 mx-auto my-auto tranheadText"
            style={{ cursor: "pointer" }}
            onClick={()=>handleCatalogue('products')}
            

          >
            <h4>Products</h4>
            <hr
              style={{
                backgroundColor: "white",
                height: 2,
              }}
            />
          </button>

          <button
            className="col-md-6 col-lg-6 col-6 mx-auto my-auto tranRight"
            style={{ cursor: "pointer" }}
            onClick={()=>handleCatalogue('categories')}
          >
            <h4>Catagories</h4>
            <hr />
          </button>
        </div>
      </div>

      <br />

      <div style={{ width: "100%" }}>
        {showError(error, error)}
        {showSuccess(success, "Added to cart successfully!")}
      </div>
      <div className="row">
      {list}
      </div>

    
    </div>
  );
};

export default Home;
