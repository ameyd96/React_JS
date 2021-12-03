import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Suchi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div classname={classes.total}>
        <span>Total Amount</span>
        <span>35.63</span>
      </div>
      <div classname={classes.actions}>
        <button classname={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button classname={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
