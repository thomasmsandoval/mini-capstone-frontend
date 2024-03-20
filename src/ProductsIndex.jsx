/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  return (
    <div>
      <h1>All products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.url} />
          <p>Price: {product.price}</p>
          <p>Is discounted?: {product.is_discounted}</p>
          <p>Tax: {product.tax}</p>
          <p>Total: {product.total}</p>
          <p>Description: {product.description}</p>
          <p>Supplier: {product.supplier}</p>
          <p>Images: {product.images}</p>
        </div>
      ))}
    </div>
  );
}
