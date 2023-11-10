import { useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Alert from "./components/UI/Alert";
import Footer from "./components/Layout/Footer";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [isShownAlert, setIsShownAlert] = useState(false);

  useEffect(() => {
    isShownAlert &&
      setTimeout(() => {
        setIsShownAlert((prevState) => !prevState);
      }, 5000);
  }, [isShownAlert]);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const toggleAlertHandler = () => {
    setIsShownAlert((prevState) => !prevState);
  };

  const successAlert = (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <BsFillCheckCircleFill size={20} color="green" />
      <p style={{ margin: "0" }}>Order received successfully!</p>
    </div>
  );

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onShowAlert={toggleAlertHandler} onClose={hideCartHandler} />
      )}
      {isShownAlert && (
        <Alert onClose={toggleAlertHandler}>{successAlert}</Alert>
      )}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
