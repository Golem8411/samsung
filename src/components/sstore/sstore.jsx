import React from "react";
import styles from "../sstore/sstore.module.css";
import S25U from "../../assets/img/samsung-titanio.png";
import S25P from "../../assets/img/samsung-azul.png";
import S25 from "../../assets/img/samsung-branco.png";
import S24U from "../../assets/img/samsung-violeta.png";
import S24P from "../../assets/img/samsung-laranja.png";
import S24 from "../../assets/img/samsung-cinza.png";
import Fold from "../../assets/img/samsung-prata.png";
import Flip from "../../assets/img/samsung-flip.png";

const sstore = () => {
  return (
    <section className={styles.store}>
      <div className={styles.storeWrapper}>
        <div className={styles.storeContent}>
          <h2>Produtos</h2>
        </div>
        <div className={styles.storeGrid}>
          <div className={styles.storeRow}>
            <div className={styles.storeCard}>
              <div>
                <img src={S25U} alt="" />
              </div>
              <div className={styles.cardTxt}>
                <h2>Samsung Galaxy S25 Ultra</h2>
                <h2></h2>
              </div>
              <div className={styles.produtosBuy}>
                <a href="/Comprar-Samsung-S25-Ultra">Comprar</a>
              </div>
            </div>
            <div className={styles.storeCard}>
              <div>
                <img src={S25P} alt="" />
              </div>
              <div className={styles.cardTxt}>
                <h2>Samsung Galaxy S25+</h2>
                <h2></h2>
              </div>
              <div className={styles.produtosBuy}>
                <a href="/Comprar-Samsung-S25-Plus">Comprar</a>
              </div>
            </div>
            <div className={styles.storeCard}>
              <div>
                <img src={S25} alt="" />
              </div>
              <div className={styles.cardTxt}>
                <h2>Samsung Galaxy S25</h2>
                <h2></h2>
              </div>
              <div className={styles.produtosBuy}>
                <a href="/Comprar-Samsung-S25">Comprar</a>
              </div>
            </div>
            <div className={styles.storeCard}>
              <div>
                <img src={S24U} alt="" />
              </div>
              <div className={styles.cardTxt}>
                <h2>Samsung Galaxy S24 Ultra</h2>
                <h2></h2>
              </div>
              <div className={styles.produtosBuy}>
                <a href="/Comprar-Samsung-S24-Ultra">Comprar</a>
              </div>
            </div>
          </div>
          <div className={styles.storeRow}>
            <div className={styles.storeCard}>
              <div>
                <img src={S24P} alt="" />
              </div>
              <div className={styles.cardTxt}>
                <h2>Samsung Galaxy S24+</h2>
                <h2></h2>
              </div>
              <div className={styles.produtosBuy}>
                <a href="/Comprar-Samsung-S24-Plus">Comprar</a>
              </div>
            </div>
            <div className={styles.storeCard}>
              <div>
                <img src={S24} alt="" />
              </div>
              <div className={styles.cardTxt}>
                <h2>Samsung Galaxy S24</h2>
                <h2></h2>
              </div>
              <div className={styles.produtosBuy}>
                <a href="/Comprar-Samsung-S24">Comprar</a>
              </div>
            </div>
            <div className={styles.storeCard}>
              <div>
                <img src={Fold} alt="" />
              </div>
              <div className={styles.cardTxt}>
                <h2>Samsung Galaxy Z Fold6</h2>
                <h2></h2>
              </div>
              <div className={styles.produtosBuy}>
                <a href="/Comprar-Samsung-Z-Fold6">Comprar</a>
              </div>
            </div>
            <div className={styles.storeCard}>
              <div>
                <img src={Flip} alt="" />
              </div>
              <div className={styles.cardTxt}>
                <h2>Samsung Galaxy Z Flip6</h2>
                <h2></h2>
              </div>
              <div className={styles.produtosBuy}>
                <a href="/Comprar-Samsung-Z-Flip6">Comprar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default sstore;
