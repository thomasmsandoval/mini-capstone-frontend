import axios from "axios";
export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      console.log(response);
      event.target.reset();
    });
  };

  return (
    <div id="signup">
      <h1>Signup!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password Confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
