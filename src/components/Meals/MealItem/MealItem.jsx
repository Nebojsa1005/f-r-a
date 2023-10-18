import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
const MealItem = ({ meal }) => {
  const price = `$${meal.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext)

  const onAddItem = (amount) => {
    cartCtx.addItem({
      ...meal,
      amount
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddItem={onAddItem}/>
      </div>
    </li>
  );
};

export default MealItem;
