import styles from "../footer/footer.module.css";
import Insta from "../../assets/img/insta-icon.svg";
import Meta from "../../assets/img/face-icon.svg";
import Twitter from "../../assets/img/twitter-x.svg";
import Samsung from "../../assets/img/logo-samsung.jpeg";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.wrapperFooter}>
        <div className={styles.contentFooter}>
          <div>
            <div>
              <img className={styles.modelsImg} src={Samsung} alt="" />
            </div>
            <p>
              Esse website é melhor visualizado nas versões Microsoft Internet
              Explorer11 ou superiore/ou nas últimas versões dos navegadores
              Google Chrome e Mozilla Firefox. Formas de pagamento aceita: Pix,
              Cartão de crédito (Visa, MasterCard, Elo, Amerecan Express Diners
              Club,Hipercard, Elo) e Cartão Samsung Itaú.
            </p>
          </div>
          <div>
            <nav>
              <ul className={styles.ulFooter}>
                <li className={styles.liTitle}>
                  <a href="/Loja">Produtos</a>
                </li>
                <li className={styles.liProduct}>
                  <a href="Samsung-S25-Ultra">Galaxy S25 Ultra</a>
                </li>
                <li className={styles.liProduct}>
                  <a href="/Comprar-Samsung-S25-Plus">Galaxy S25+</a>
                </li>
                <li className={styles.liProduct}>
                  <a href="/Comprar-Samsung-Z-Fold6">Z Fold6</a>
                </li>
                <li className={styles.liProduct}>
                  <a href="/Comprar-Samsung-Z-Flip6">Z Flip6</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.Copy}>
          <div className={styles.CopyWrapper}>
            <div className={styles.imgCopy}>
              <a href="https://www.instagram.com/samsungbrasil/?hl=pt-br" target="_blank">
                <img className={styles.modelsImg} src={Insta} alt="" />
              </a>
              <a href="https://www.facebook.com/SamsungBrasil/?locale=pt_BR" target="_blank">
                <img className={styles.modelsImg} src={Meta} alt="" />
              </a>
              <a href="https://x.com/SamsungBrasil" target="_blank">
                <img className={styles.modelsImg} src={Twitter} alt="" />
              </a>
            </div>
            <div className={styles.divP}>
              <p>© 1995-2025 Samsung</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
