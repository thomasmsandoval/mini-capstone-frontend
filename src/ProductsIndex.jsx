/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  console.log(props);
  return (
    <div id="products-index">
      <h1>All products</h1>
      <div className="cards">
        {props.products.map((product) => (
          <div key={product.id} className="products card">
            <h2>{product.name}</h2>
            <div className="card-body">
              <img src={product.url} />
              <p>Price: {product.price}</p>
              <p>Is discounted?: {product.is_discounted}</p>
              <p>Tax: {product.tax}</p>
              <p>Total: {product.total}</p>
              <p>Description: {product.description}</p>
              <p>Supplier: {product.supplier}</p>
              <p>Images: {product.images}</p>
              <button onClick={() => props.onShowProduct(product)}>More info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
