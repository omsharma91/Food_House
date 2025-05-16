import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../App";
import Searchcard from "./productcard";

export default function SearchPage() {
  const { searchTerm, setSearchTerm } = useContext(myContext);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("./Productdata/allProduct.json")
      .then((res) => {
        setProductData(res.data);
      })
      .catch((error) => console.log(error));
  },[]);
  const filteredProducts =
  searchTerm.trim() === ""
    ? []
    : productData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
    <div className=" d-flex flex-column container mt-5">
      <h2 className="mb-3">Search Products</h2>
      {filteredProducts.length > 0 ? (
        <ul className="list-group">
          {filteredProducts.map((product) => (
            <div className="d-flex flex-column col-md-4 mb-3" key={product.id}>
              <Searchcard products={product} />
            </div>
          ))}
        </ul>
      ) : (
        <p>No matching items found.</p>
      )}
    </div>
  );
}
