/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props);
  return (
    <div id="products-index">
      <h1>All products</h1>
      Search Filter:{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      <div className="cards">
        {props.products
          .filter((product) => product.name.toLowerCase().includes(searchFilter.toLocaleLowerCase()))
          .map((product) => (
            <div key={product.id} className="products card">
              <h2>{product.name}</h2>
              <div className="card-body">
                <div>
                  {product.images.map((image) => (
                    <div key={image.id}>
                      <img src={image.url} />
                    </div>
                  ))}
                </div>
                <p>Price: {product.price}</p>
                <p>Is discounted?: {product.is_discounted}</p>
                <p>Tax: {product.tax}</p>
                <p>Total: {product.total}</p>
                <p>Description: {product.description}</p>
                {/* <p>Supplier: {product.supplier.name}</p> */}
                <button onClick={() => props.onShowProduct(product)}>More info</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
