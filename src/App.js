import { useState } from "react";
import Cart from "./components/Cart/Cart.jsx";
import Header from "./components/Layout/Header/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";
import CartProvider from "./store/cart-provider.jsx";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      { cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
