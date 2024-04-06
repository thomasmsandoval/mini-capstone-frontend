/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProductsShowPage() {
  const [product, setProduct] = useState({});
  const params = useParams();

  const handleShowProduct = () => {
    axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => {
      setProduct(response.data);
    });
  };

  useEffect(handleShowProduct, []);

  return (
    <div id="products-show">
      <h2>{product.name}</h2>
      <img src={product.images} alt="" />
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}
