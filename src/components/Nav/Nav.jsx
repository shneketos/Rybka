import React from "react";
import styles from "./Nav.module.scss";
import Search from "../../img/search.svg";
export const Nav = () => {
  return (
    <>
      <div className={styles.search}>
        <form>
          <input type="text" placeholder="Искать здесь..." />
          <button type="submit">
            <img src={Search} alt="search" />
          </button>
        </form>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#pizza">Все</a>
          </li>
          <li>
            <a href="#pizza">Популярные</a>
          </li>
          <li>
            <a href="#pizza">Речные</a>
          </li>
          <li>
            <a href="#rolls">Озерные</a>
          </li>
          <li>
            <a href="#sushi">Морские</a>
          </li>
          <li>
            <a href="#sets">Ракообразные</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
