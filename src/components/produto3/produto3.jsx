import styles from "../produto3/produto3.module.css";
import GalaxyS25 from "../../assets/img/samsung-branco.png";
import MasterCard3 from "../../assets/img/othercard.svg";
import Elo from "../../assets/img/cartaoElo.svg";
import Button3 from "../button/button";

const Produto3 = () => {
  return (
    <section className={styles.Produto3}>
      <div className={styles.WrapperProduto3}>
        <div className={styles.imgProduto3}>
          <img src={GalaxyS25} alt="Galaxy S25" />
        </div>
        <div>
          <div className={styles.ContentProduto3}>
            <h2>Celular Samsung Galaxy S25 5G</h2>
            <p className={styles.PrecoVistaNormal}>
              R$ 6.749,00 <span> À vista</span>
            </p>
            <h3>Sobre o item:</h3>
            <ul>
              <li>A tela de 6.2 polegadas</li>
              <li>A resolução também é alta: 2340x1080 pixel.</li>
              <li>Memória interna de 256 GB</li>
              <li>Leitor multimídia, videoconferência, e bluetooth</li>
              <li>Câmera Tripla Traseira de 50MP + 12MP + 10MP</li>
              <li>Bateria de 4.900mAh</li>
              <li>Processador Snapdragon 8 Elite for Galaxy (3nm)</li>
            </ul>
          </div>
        </div>
        <div className={styles.PrecoCelularNormal}>
          <h4>R$ 6.749,00</h4>
          <p className={styles.Parcela3}>a partir de 18x de R$ 416,00</p>
          <p className={styles.PrecoFrete3}>
            <span>Receba </span> até 15 de Abril
          </p>
          <p className={styles.Frete3}>Frete Grátis</p>
          <p className={styles.Estoque3}>Em Estoque</p>
          <div className={styles.Buybtn}>
            <Button3>Comprar Agora</Button3>
          </div>

          <div className={styles.imgCartao3}>
            <img
              className={styles.Master}
              src={MasterCard3}
              alt="Cartão Mastercard-3"
            />
            <img className={styles.Elo} src={Elo} alt="Cartão Elo" />
          </div>

          <div className={styles.LastText3}>
            <p className={styles.Paga}>
              Pagar com: <span className={styles.PagaCartao3}>CARTÃO</span>
            </p>
            <p className={styles.Numero3}>5378*</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produto3;
