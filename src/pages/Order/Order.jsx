import React from "react";

import styles from "./Order.module.scss";
export const Order = () => {
  return (
    <main>
      <section className={styles.order}>
        <h1>Как заказать</h1>
        <p>
          <p>
            Шаг №1 - Перейти на главную страницу и выбрать интересующий товар
          </p>
          <p>Шаг №2 - Нажать добавить в корзину</p>
          <p>Шаг №3 - Перейти в корзину </p>
          <p>Шаг №4 - Оплатить заказ</p>
        </p>
      </section>
    </main>
  );
};
export default Order;
