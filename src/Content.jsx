/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { ProductShow } from "./ProductShow";
import { ProductsShowPage } from "./ProductsShowPage";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Signup } from "./Signup";

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
    axios.delete(`http://localhost:3000/products/` + id + `.json`, id).then((response) => {
      setProducts(products.filter((product) => product.id !== id));
      handleClose();
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<ProductsIndex products={products} onShowProduct={handleShowProduct} />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/products/new" element={<ProductsNew onCreateProduct={handleCreateProduct} />} />
        <Route path="/products/:id" element={<ProductShow />} />
      </Routes>
      <div className="container">
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
