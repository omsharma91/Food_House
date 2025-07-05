import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../App";
import Searchcard from "./productcard";

export default function SearchPage() {
  const { searchTerm } = useContext(myContext);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("./Productdata/allProduct.json")
      .then((res) => {
        setProductData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredProducts =
    searchTerm.trim() === ""
      ? []
      : productData.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Search Products</h2>
      {filteredProducts.length > 0 ? (
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <Searchcard products={product} />
            </div>
          ))}
        </div>
      ) : (
        <p>No matching items found.</p>
      )}
    </div>
  );
}
