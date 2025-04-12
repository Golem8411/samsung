import styles from "../galaxyS24Plus/galaxyS24Plus.module.css";
import GalaxyS24P from "../../assets/img/samsung-laranja.png";
import MastercardP from "../../assets/img/mastercard.svg";
import Elo24P from "../../assets/img/cartaoElo.svg";
import ButtonGS24Plus from "../button/button";

const GalaxyS24Plus = () => {
  return (
    <section className={styles.GalaxyS24Plus}>
      <div className={styles.WrapperGalaxyS24Plus}>
        <div className={styles.imgGalaxyS24Plus}>
          <img src={GalaxyS24P} alt="Galaxy Laranja" />
        </div>

        <div>
          <div className={styles.ContentS24Plus}>
            <h2>Celular Samsung Galaxy S24+</h2>
            <p className={styles.PrecoG24P}>
              R$ 6.649,05 <span> À vista</span>
            </p>
            <h3>Sobre o item:</h3>
            <ul>
              <li>Memória RAM: 12 GB e Cartão eSIM incluído.</li>
              <li>
                Dispositivo desbloqueado para que você escolha a companhia
                telefônica de sua preferência.
              </li>
              <li>Compatível com redes 5G e Memória interna de 256GB</li>
              <li>Tela Dynamic AMOLED 2X de 6.7".</li>
              <li>Tem 3 câmeras traseiras de 50Mpx/10Mpx/12Mpx</li>
              <li>Câmeras frontais de 12Mpx.</li>
              <li>Processador Exynos 2400 de 3.2GHz com 12GB de RAM.</li>
              <li>Bateria de 4900mAh com carregamento sem fio.</li>
              <li>Com reconhecimento facial e sensor de impressão digital.</li>
            </ul>
          </div>
        </div>
        <div className={styles.PrecoGalaxy24P}>
          <h4>R$ 6.649,05</h4>
          <p className={styles.ParcelaGSP}>a partir de 18x de R$ 388,83</p>
          <p className={styles.FreteS24P}>
            <span>Receba </span> até 16 de Abril
          </p>

          <p className={styles.FreteGS24P}>Frete Grátis</p>

          <p className={styles.EstoquePlus}>Em Estoque</p>
          <div className={styles.Buybtn}>
            <ButtonGS24Plus>Compre Agora</ButtonGS24Plus>
          </div>

          <div className={styles.imgCartaoS24P}>
            <img
              className={styles.S24P}
              src={MastercardP}
              alt="Cartão Master"
            />
            <img className={styles.Elo24P} src={Elo24P} alt="Elo card" />
          </div>
          <div className={styles.FinalP}>
            <p>
              Pagar com: <span className={styles.PagaS24P}> CARTÃO</span>
            </p>
            <p className={styles.FinalNumberP}>9472*</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalaxyS24Plus;
