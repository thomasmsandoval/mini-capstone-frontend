/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function ProductShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product.id);
  };
  return (
    <div id="products-show">
      <h1>{props.product.name}</h1>
      <p>Price: {props.product.price}</p>
      <p>Is discounted?: {props.product.isdiscounted}</p>
      <p>Tax: {props.product.tax}</p>
      <p>Total: {props.product.total}</p>
      <p>Description: {props.product.description}</p>
      <p>Supplier: {props.product.supplier}</p>
      <p>Images: {props.product.images}</p>
      <h2>Edit product!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          Price: <input defaultValue={props.product.price} name="price" type="integer" />
        </div>
        <div>
          Is discounted?: <input defaultValue={props.product.isdiscounted} name="is discounted?" type="text" />
        </div>
        <div>
          Tax: <input defaultValue={props.product.tax} name="tax" type="integer" />
        </div>
        <div>
          Total: <input defaultValue={props.product.total} name="total" type="integer" />
        </div>
        <div>
          Description: <input defaultValue={props.product.description} name="descriptioin" type="text" />
        </div>
        {/* <div>
          Supplier: <input defaultValue={props.product.supplier} name="supplier" type="text" />
        </div> */}
        <div>
          Images: <input defaultValue={props.product.images} name="images" type="text" />
        </div>
        <button type="submit">Update product</button>
      </form>
      <button onClick={handleClick}>Delete product</button>
    </div>
  );
}
