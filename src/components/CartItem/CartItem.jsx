import React from "react";
import styles from "./CartItem.module.scss";
import Minus from "../../img/minus.svg";
import Plus from "../../img/plus.svg";
import Del from "../../img/del.svg";
import { useDispatch } from "react-redux";
import { addItem, removeItem, minusItem } from "../../redux/slices/cartSlice";
export const CartItem = ({ id, name, price, count, img }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className={styles.cartitem}>
      <div className={styles.cart_left}>
        <img className={styles.cartimg} src={img} alt="name" />

        <div className={styles.cartinfo}>
          <h3>{name}</h3>
        </div>
      </div>

      <div className={styles.cart_right}>
        <div className={styles.cartcount}>
          <button onClick={onClickMinus} className={styles.btn}>
            <img src={Minus} alt="-" />
          </button>
          <b>{count}</b>
          <button onClick={onClickPlus} className={styles.btn}>
            <img src={Plus} alt="+" />
          </button>
        </div>
        <div className={styles.price}>
          <b>{price}₽</b>
        </div>
        <button onClick={onClickRemove} className={styles.btn}>
          <img src={Del} alt="x" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
