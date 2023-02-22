import React from "react";
import Slider from "../../components/Slider/Slider";
import Nav from "../../components/Nav/Nav";
import items from "./items.json";
import ItemBlock from "../../components/ItemBlock/ItemBlock";
import styles from "./Main.module.scss";
export const Main = () => {
  const [SearchValue, setSearchValue] = React.useState("");
  console.log(SearchValue);
  const itemlist = items
    .filter((obj) => {
      if (
        obj.name.toLocaleLowerCase().includes(SearchValue.toLocaleLowerCase())
      ) {
        return true;
      }
      return false;
    })
    .map((obj) => <ItemBlock {...obj} />);
  return (
    <>
      <main>
        <Slider />
        <h2>Товары</h2>
        <Nav SearchValue={SearchValue} setSearchValue={setSearchValue} />
        <section className={styles.catalog}>
          {itemlist.length === 0 ? (
            <div className={styles.notfound}>Ничего не найдено</div>
          ) : (
            itemlist
          )}
        </section>
      </main>
    </>
  );
};
export default Main;
