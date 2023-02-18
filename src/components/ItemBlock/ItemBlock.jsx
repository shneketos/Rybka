import React from "react";
import styles from "./ItemBlock.module.scss";
export const ItemBlock = ({ name, price, desc, img }) => {
  return (
    <div className={styles.item_wrapper}>
      <div className={styles.catalog_item}>
        <img src={img} alt="itemphoto" />
        <div className="iteminfo">
          <div className={styles.item_name}>{name}</div>
          <p className={styles.item_desc}>{desc}</p>
          <div className={styles.item_bottom}>
            <div className={styles.item_price}>{price}P</div>
            <button className={styles.addcart}>
              <b>+</b>
              <span>Добавить</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemBlock;
