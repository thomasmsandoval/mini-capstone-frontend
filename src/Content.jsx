/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";

export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductShowVisible, setIsProductVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log(handleIndexProducts);
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateProduct", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  };

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log(handleClose);
    setIsProductVisible(false);
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductShowVisible} onClose={handleClose}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
