import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = ({ onClose }) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>42.23</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onClose} className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
