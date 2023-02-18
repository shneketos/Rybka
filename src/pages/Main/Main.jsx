import React from "react";
import Slider from "../../components/Slider/Slider";
import Nav from "../../components/Nav/Nav";
import items from "./items.json";
import ItemBlock from "../../components/ItemBlock/ItemBlock";
import styles from "./Main.module.scss";
export const Main = () => {
  console.log(items);

  return (
    <>
      <main>
        <Slider />
        <h2>Товары</h2>
        <Nav />
        <section className={styles.catalog}>
          {items.map((obj) => (
            <ItemBlock {...obj} />
          ))}
        </section>
      </main>
    </>
  );
};
export default Main;
