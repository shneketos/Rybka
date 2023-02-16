import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../fish.svg";
import Cart from "../../img/cart.svg";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Link to="/">
          <img src={Logo} alt="logo" className="123" />
        </Link>
        <ul className={styles.center}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about-us">О нас</Link>
          </li>
          <li>
            <Link to="/how-to-order"> Как заказать</Link>
          </li>
          <li>
            <Link to="/delivery"> Доставка и оплата</Link>
          </li>
          <li>
            <Link to="/news">Новости</Link>
          </li>
          <li>
            <Link to="/receipt">Рецепты</Link>
          </li>
        </ul>
        <div className={styles.right}>
          <div>
            <Link to="/cart" className={styles.cart}>
              <img src={Cart} alt="cart"></img>
              <span>10</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
