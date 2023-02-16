import React from "react";
import styles from "./Delivery.module.scss";
import DeliverySVG from "../Delivery/img/delivery.svg";
import Clock from "../Delivery/img/clock.svg";
import Date from "../Delivery/img/date.svg";
import Credit from "../Delivery/img/credit.svg";
import Nfc from "../Delivery/img/nfc.svg";
import Wallet from "../Delivery/img/wallet.svg";
export const Delivery = () => {
  return (
    <main>
      <section className={styles.delivery}>
        <h1 className={styles.top}>Доставка и оплата</h1>

        <section className={styles.infoblock}>
          <h2>Доставка</h2>
          <ul className={styles.infoitems}>
            <li className={styles.infoitem}>
              <img src={DeliverySVG} alt="delivery" />
              <div>
                <p>Доставка осуществляется при заказе от 990 ₽.</p>
                <span>Доставка бесплатная при любой сумме заказа</span>
              </div>
            </li>
            <li className={styles.infoitem}>
              <img src={Clock} alt="clock" />
              <div>
                <p>Время доставки</p>
                <ul>
                  <li>Доставка от 30 до 120 минут</li>
                </ul>
              </div>
            </li>
            <li className={styles.infoitem}>
              <img src={Date} alt="date" />
              <div>
                <p>График работы</p>
                <span>Принимаем и доставляем заказы с 08:00 до 21:00</span>
              </div>
            </li>
          </ul>
        </section>
        <section className={styles.payment}>
          <h2>Оплата</h2>
          <ul className={styles.paymentitems}>
            <li className={styles.paymentitem}>
              <img src={Credit} alt="credit" />
              <h2>Банковской картой</h2>
              <p>
                Вы можете оплатить заказ на сайте банковской картой
                Visa,Mastercard,МИР.
              </p>
            </li>
            <li className={styles.paymentitem}>
              <img src={Nfc} alt="nfc" />
              <h2>Безналичная оплата</h2>
              <p>
                Вы можете оплатить заказ безналичным способом, используя
                банковскую карту или через ваш смартфон с поддержкой NFC.
              </p>
            </li>
            <li className={styles.paymentitem}>
              <img src={Wallet} alt="cash" />
              <h2>Наличными курьеру</h2>
              <p>Вы можете оплатить заказ курьеру при получении.</p>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
};
export default Delivery;
