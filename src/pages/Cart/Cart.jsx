import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { clearItems } from "../../redux/slices/cartSlice";
import CartEmpty from "./CartEmpty";
export const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cartSlice);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm("Очистить корзину?")) {
      dispatch(clearItems());
    }
  };
  if (!totalPrice) {
    return <CartEmpty />;
  }
  const onClickOrder = () => {
    alert("Заказ успешно создан");
    dispatch(clearItems());
  };

  return (
    <section className={styles.cart}>
      <div className={styles.carttop}>
        <h2 className={styles.title}>Корзина</h2>
        <button onClick={onClickClear} className={styles.clear}>
          Очистить корзину
        </button>
      </div>
      <section className={styles.cartitems}>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className={styles.bottom}>
          <div className={styles.details}>
            <span>
              Всего : <b>{totalCount} шт.</b>
            </span>
            <span>
              Сумма заказа: <b> {totalPrice} ₽</b>
            </span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.back}>
              <Link to="/">Вернуться назад</Link>
            </button>
            <button onClick={onClickOrder} className={styles.pay}>
              <Link to="/">Оплатить сейчас</Link>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Cart;
