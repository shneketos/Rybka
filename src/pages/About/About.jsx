import React from "react";
import styles from "./About.module.scss";
export const About = () => {
  return (
    <main>
      <section className={styles.about}>
        <h1>О компании</h1>
        <h3>Магазин рыбка - лучший выбор</h3>
        <p>Шинкевич Никита Андреевич</p>
        <p>РПИС-01</p>

        <div className={styles.block}>
          <div className={styles.blockitem}>
            <p>1</p>
            <h4>Полуфабрикаты по эксклюзивным рецептам</h4>
            <span>
              Шпинатный торт с сёмгой, шашлыки, рулеты для запекания, котлеты с
              начинками, пельмени манты и фаршированные кальмары.
            </span>
          </div>
          <div className={styles.blockitem}>
            <p>2</p>
            <h4>Необычные консервы из Владивостока и Мурманска</h4>
            <span>
              Устрицы, спизула, щупальца кальмара, трубач, гребешок, мидии,
              трепанг, крабы, осьминоги, анадара, кукумария, печень трески.
            </span>
          </div>
          <div className={styles.blockitem}>
            <p>3</p>
            <h4>Свежая продукция всегда</h4>
            <span>
              Возможно ли это? Производим продукцию без консервантов, поэтому
              срок хранения маленький, поэтому продаем быстро и делаем новую.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};
export default About;
