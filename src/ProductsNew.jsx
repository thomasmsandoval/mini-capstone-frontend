/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    props.onCreateRecipe(params);
    event.target.reset();
  };

  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="integer" />
        </div>
        <div>
          Is discounted?: <input name="is_discounted?" type="text" />
        </div>
        <div>
          Tax: <input name="tax" type="integer" />
        </div>
        <div>
          Total: <input name="total" type="integer" />
        </div>
        <div>
          Description: <input name="descritption" type="text" />
        </div>
        <div>
          Supplier <input name="supplier" type="text" />
        </div>
        <div>
          Images: <input name="images" type="url" />
        </div>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}
