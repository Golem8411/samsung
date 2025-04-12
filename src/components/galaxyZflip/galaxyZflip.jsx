import styles from "../galaxyZflip/galaxyZflip.module.css";
import GalaxyZFlip from "../../assets/img/samsung-flip.png";
// import MasterFlip from "../../assets/img/mastercard.svg";
import EloFlip from "../../assets/img/cartaoElo.svg";
import ButtonFlip from "../button/button";

const Zflip6 = () => {
  return (
    <section className={styles.GalaxyZFlip}>
      <div className={styles.WrapperZflip}>
        <div className={styles.imgZflip}>
          <img src={GalaxyZFlip} alt="Galaxy Flip" />
        </div>

        <div>
          <div className={styles.ContentZflip}>
            <h2>Celular Samsung Galaxy ZFlip6</h2>
            <p className={styles.PrecoFvista}>
              R$ 7.599,05 <span>À vista</span>
            </p>
            <h3>Sobre o item:</h3>
            <ul>
              <li>Memória RAM: 12 GB</li>
              <li>
                Dispositivo desbloqueado para que você escolha a companhia
                telefônica de sua preferência.
              </li>
              <li>Compatível com redes 5G.</li>
              <li>Tela Dynamic AMOLED 2X de 6.7".</li>
              <li>
                Câmera frontal de 10Mpx e Com sensor de impressão digital.
              </li>
              <li>Bateria de 4 Ah.</li>
              <li>Memória interna de 256GB e Cartão eSIM incluído</li>
            </ul>
          </div>
        </div>
        <div className={styles.ZFlip}>
          <h4>R$ 7.599,00</h4>
          <p className={styles.ParcelaZFlip}>a partir de 18x de R$ 444,38</p>
          <p className={styles.FreteZFlip}>
            <span>Receba </span> até 17 de Abril
          </p>

          <p className={styles.FreteZFlip6}>Frete Grátis</p>

          <p className={styles.EstoqueZFlip}>Em Estoque</p>
          <div className={styles.Buybtn}>
            <ButtonFlip>Comprar Agora</ButtonFlip>
          </div>

          <div className={styles.imgCartaoZFlip}>
            {/* <img className={styles.Flip} src={MasterFlip} alt="Master Flip" /> */}
            <img className={styles.EloFlip} src={EloFlip} alt="Elo Flip" />
          </div>

          <div className={styles.FinalZflip}>
            <p>
              Pagar com: <span className={styles.PagaZflip}> CARTÃO</span>
            </p>
            <p className={styles.FinalNumberZFlip}>5321*</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zflip6;
