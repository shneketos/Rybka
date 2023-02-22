import React from "react";
import styles from "./Nav.module.scss";
import Search from "../../img/search.svg";

export const Nav = ({ SearchValue, setSearchValue }) => {
  return (
    <>
      <div className={styles.search}>
        <form>
          <input
            value={SearchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            type="text"
            placeholder="Искать здесь..."
          />
          <button type="submit">
            <img src={Search} alt="search" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Nav;
