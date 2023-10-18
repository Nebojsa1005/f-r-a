
import { useContext } from "react";
import CartIcon from "../../Cart/CartIcon";
import classes from "./Headerbutton.module.css";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  return (
    <button onClick={onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
