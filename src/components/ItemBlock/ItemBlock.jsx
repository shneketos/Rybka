import React from "react";
import styles from "./ItemBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
export const ItemBlock = ({ id, name, price, desc, img }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cartSlice.items.find((obj) => obj.id === id)
  );
  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      img,
      desc,
    };
    dispatch(addItem(item));
  };
  return (
    <div className={styles.item_wrapper}>
      <div className={styles.catalog_item}>
        <img src={img} alt="itemphoto" />
        <div className="iteminfo">
          <div className={styles.item_name}>{name}</div>
          <p className={styles.item_desc}>{desc}</p>
          <div className={styles.item_bottom}>
            <div className={styles.item_price}>{price}P</div>
            <button onClick={onClickAdd} className={styles.addcart}>
              <b>+</b>
              <span>Добавить</span>
              {addedCount > 0 && <i>{addedCount}</i>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemBlock;
