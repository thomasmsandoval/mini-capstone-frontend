import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [flashMessage, setFlashMessage] = useState("");

  const getFlashMessageFromLocalStorage = () => {
    if (localStorage.flashMessage) {
      setFlashMessage(localStorage.flashMessage);
      localStorage.removeItem("flashMessage");
    }
  };

  useEffect(getFlashMessageFromLocalStorage, []);

  return (
    <div id="app">
      <BrowserRouter>
        <Header />
        <div onClick={() => setFlashMessage(null)}>
          <h1>{flashMessage}</h1>
        </div>
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
