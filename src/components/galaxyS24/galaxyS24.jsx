import styles from "../galaxyS24/galaxyS24.module.css";
import ButtonS24 from "../button/button";
import GalaxyS24N from "../../assets/img/samsung-cinza.png";
import Mastercard from "../../assets/img/mastercard.svg";
import Elo24 from "../../assets/img/cartaoElo.svg";

const GalaxyS24 = () => {
  return (
    <section className={styles.GalaxyS24}>
      <div className={styles.WrapperGalaxy24}>
        <div className={styles.imgGalaxyS24}>
          <img src={GalaxyS24N} alt="Galaxy preto" />
        </div>

        <div>
          <div className={styles.ContentS24}>
            <h2>Celular Samsung Galaxy S24</h2>
            <p className={styles.PrecoG24}>
              R$ 5.699,05 <span>À vista</span>
            </p>
            <h3>Sobre o item:</h3>
            <ul>
              <li>Memória RAM: 8 GB</li>
              <li>
                Dispositivo desbloqueado para que você escolha a companhia
                telefônica de sua preferência.
              </li>
              <li>Compatível com redes 5G.</li>
              <li>Tela AMOLED Dinamico 2X de 6.2".</li>
              <li>Tem 3 câmeras traseiras de 50Mpx/12Mpx/10Mpx.</li>
              <li>Câmeras frontais de 12.0 MP.</li>
              <li>Bateria de 4000mAh.</li>
              <li>Memória interna de 256GB.</li>
              <li>Com sensor de impressão digital.</li>
            </ul>
          </div>
        </div>
        <div className={styles.PrecoGalaxy24}>
          <h4>R$ 5.699,05</h4>
          <p className={styles.ParcelaGS}>a partir de 18x de R$ 333,27</p>
          <p className={styles.FreteS24}>
            <span>Receba </span> até 15 de Abril
          </p>

          <p className={styles.FreteGS24}>Frete Grátis</p>

          <p className={styles.Estoque24}>Em Estoque</p>
          <div className={styles.Buybtn}>
            <ButtonS24>Comprar Agora</ButtonS24>
          </div>

          <div className={styles.imgCartaoG24}>
            <img className={styles.S24} src={Mastercard} alt="Mastercard" />
            <img className={styles.Elo24} src={Elo24} alt="Elo card" />
          </div>
          <div className={styles.Final}>
            <p>
              Pagar com: <span className={styles.PagaS24}> CARTÃO</span>
            </p>
            <p className={styles.FinalNumber}>9472*</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalaxyS24;
