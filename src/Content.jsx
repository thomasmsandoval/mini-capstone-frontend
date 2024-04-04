/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { ProductShow } from "./ProductShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductShowVisible, setIsProductVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      setProducts(response.data);
      console.log(products);
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

  const handleUpdateProduct = (id, params) => {
    console.log("handleUpdateProduct", params);
    axios.patch(`http://localhost:3000/products/` + id + `json`, params).then((response) => {
      setProducts(
        products.map((product) => {
          if (product.id === response.data.id) {
            return response.data;
          } else {
            return product;
          }
        })
      );
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductVisible(false);
  };

  const handleDestroyProduct = (id) => {
    console.log("handleDestroyProduct", id);
    axios.delete(`http://localhost:3000/products/` + id + `.json`).then((response) => {
      setProducts(products.filter((product) => product.id !== id));
      handleClose();
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <main>
      <div className="container">
        <Login />
        <Signup />
        <LogoutLink />
        <ProductsNew onCreateProduct={handleCreateProduct} />
        <ProductsIndex products={products} onShowProduct={handleShowProduct} />
        <Modal show={isProductShowVisible} onClose={handleClose}>
          <ProductShow
            product={currentProduct}
            onUpdateProduct={handleUpdateProduct}
            onDestroyProduct={handleDestroyProduct}
          />
        </Modal>
      </div>
    </main>
  );
}
