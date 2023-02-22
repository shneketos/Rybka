import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../fish.svg";
import Cart from "../../img/cart.svg";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";
export const Header = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);
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
            <Link to="/recipe">Рецепты</Link>
          </li>
        </ul>
        <div className={styles.right}>
          <div>
            <Link to="/cart" className={styles.cart}>
              <img src={Cart} alt="cart"></img>
              <span>{totalCount}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
