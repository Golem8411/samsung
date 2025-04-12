import React from "react";
import styles from "../produtos/produtos.module.css";
import S25u from "../../assets/img/samsung-titanio.png"
import S25p from "../../assets/img/samsung-azul.png"
import Sfo from "../../assets/img/samsung-prata.png"
import Sfli from "../../assets/img/samsung-flip.png"

const produtos = () => {
  return (
    <section className={styles.produtos}>
      <div className={styles.produtosWrapper}>
        <div className={styles.produtosTitle}>
          <h2>Veja os novos produtos</h2>
          <a href="/Loja">Veja Mais</a>
        </div>
        <div className={styles.produtosRow}>
          <div className={styles.produtosCard}>
            <div>
              <img src={S25u} alt="" />
            </div>
            <div className={styles.produtosName}>
              <h2>Samsung Galaxy S25 Ultra</h2>
            </div>
            <div className={styles.produtosBuy}>
              <a href="/Comprar-Samsung-S25-Ultra">Comprar</a>
            </div>
          </div>
          <div className={styles.produtosCard}>
            <div>
              <img src={S25p} alt="" />
            </div>
            <div className={styles.produtosName}>
              <h2>Samsung Galaxy S25+</h2>
              <h2></h2>
            </div>
            <div className={styles.produtosBuy}>
              <a href="/Comprar-Samsung-S25-Plus">Comprar</a>
            </div>
          </div>
          <div className={styles.produtosCard}>
            <div>
              <img src={Sfo} alt="" />
            </div>
            <div className={styles.produtosName}>
              <h2>Samsung Z Fold6</h2>
              <h2></h2>
            </div>
            <div className={styles.produtosBuy}>
              <a href="/Comprar-Samsung-Z-Fold6">Comprar</a>
            </div>
          </div>
          <div className={styles.produtosCard}>
            <div>
              <img src={Sfli} alt="" />
            </div>
            <div className={styles.produtosName}>
              <h2>Samsung Z Flip6</h2>
              <h2></h2>
            </div>
            <div className={styles.produtosBuy}>
              <a href="/Comprar-Samsung-Z-Flip6">Comprar</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default produtos;
