import styles from "../sell/sell.module.css";
import S25sell from "../../assets/img/s25sell.jpg";
import S25Usell from "../../assets/img/s25Usell.jpg";
import QR from "../../assets/img/qrcodesell.png";
import LSell from "../../assets/img/lifesell.jpg";

const sell = () => {
  return (
    <section className={styles.sell}>
      <div className={styles.sellWrapper}>
        <div className={styles.sellRow}>
          <div className={styles.sellCard}>
            <div className={styles.sellCardTxt1}>
              <h2>Galaxy S25 ∣ S25+</h2>
              <a href="">Saiba mais</a>
            </div>
            <div className={styles.sellCardImg1}>
              <img src={S25sell} alt="" />
            </div>
          </div>
          <div className={styles.sellCard}>
            <div className={styles.sellCardTxt2}>
              <h2>
                Veja formas inteligentes de conseguir seu Galaxy S25 Ultra
              </h2>
              <a href="">Comprar agora</a>
            </div>
            <div className={styles.sellCardImg1}>
              <img src={S25Usell} alt="" />
            </div>
          </div>
          <div className={styles.sellCard2}>
            <div className={styles.sellCardTxt3}>
              <h2>Ver Galaxy S25 Ultra em RA</h2>
            </div>
            <div className={styles.sellCardImg3}>
              <img src={QR} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.sellLife}>
          <div className={styles.sellLifeTxt}>
            <h2>A vida começa com Galaxy</h2>
            <a href="">Explore mais</a>
          </div>
          <div className={styles.sellLifeImg}>
            <img src={LSell} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default sell;
