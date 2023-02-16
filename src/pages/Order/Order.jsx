import React from "react";
import { Link } from "react-router-dom";
import styles from "./Order.module.scss";
export const Order = () => {
  return (
    <main>
      <section className={styles.order}>
        <h1>Как заказать</h1>
        <p>
          Для того, чтобы сделать заказ необходимо перейти на Главную главную
          страницу и выбрать интересующий товар,нажать "добавить в корзину",
          перейти в корзину с помощью клика на иконку корзины в верхней части
          сайта, после чего откроется корзина с товарами, которые Вы выбрали,
          далее нужно нажать оплатить и оплатить заказ.
        </p>
      </section>
    </main>
  );
};
export default Order;
