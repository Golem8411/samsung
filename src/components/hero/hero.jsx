import React from "react";
import styles from "../hero/hero.module.css";
import S25U from "../../assets/img/s25-ultra.jpg";
import SwiperComponent from "../swiper/swiper";



const hero = () => {

  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroImg}>
            <img src={S25U} alt="" />
          </div>
          <div className={styles.heroImgText}>
            <p>Simples. Impactante</p>
            <a href="/Comprar-Samsung-S25-Ultra">Comprar agora</a>
          </div>
        </div>
        <div className={styles.heroCamera}>
          <div className={styles.heroCameraContent}>
            <p>
              Os detalhes mais nítidos na câmera principal, teleobjetiva e até
              mesmo na ultra wide.
            </p>
          </div>
          <div className={styles.heroCameraContainer}>
           <SwiperComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
