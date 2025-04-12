import styles from "../galaxyS24Ultra/galaxyS24Ultra.module.css";
import GalaxyUltra from "../../assets/img/samsung-violeta.png";
import MasterUltra from "../../assets/img/Mastercard.svg";
import EloUltra from "../../assets/img/cartaoElo.svg";
import ButtonUltra from "../button/button";

const GalaxyS24Ultra = () => {
  return (
    <section className={styles.GalaxyS24Ultra}>
      <div className={styles.WrapperGalaxyUltra}>
        <div className={styles.imgGalaxyUltra}>
          <img src={GalaxyUltra} alt="Galaxy violeta" />
        </div>

        <div>
          <div className={styles.ContentUltra}>
            <h2>Celular Samsung Galaxy S24 Ultra</h2>
            <p className={styles.PrecoUltra}>
              R$ 9499,05 <span> À vista</span>
            </p>
            <h3>Sobre o item:</h3>
            <ul>
              <li>
                Dispositivo desbloqueado para que você escolha a companhia
                telefônica de sua preferência.
              </li>
              <li>Compatível com redes 5G e Memória interna de 256GB.</li>
              <li>Tela Dynamic AMOLED 2X de 6.8".</li>
              <li>Tem 4 câmeras traseiras de 200Mpx/50Mpx/10Mpx/12Mpx.</li>
              <li>Câmeras frontais de 12Mpx.</li>
              <li>Bateria de 5 Ah com carregamento sem fio.</li>
              <li>Resistente à água</li>
              <li>Com reconhecimento facial e sensor de impressão digital.</li>
              <li>Resistente à poeira e Cartão eSIM incluído.</li>
            </ul>
          </div>
        </div>
        <div className={styles.PrecoGalaxyUltra}>
          <h4>R$ 9499,05</h4>
          <p className={styles.ParcelaUltra}> a partide de 18x de R$ 555,50</p>
          <p className={styles.FreteUltra}>
            <span>Receba </span> até 16 de Abril
          </p>

          <p className={styles.FreteGSUltra}>Frete Grátis</p>

          <p className={styles.EstoqueUltra}>Em Estoque</p>
          <div className={styles.Buybtn}>
            <ButtonUltra>Comprar Agora</ButtonUltra>
          </div>

          <div className={styles.imgCartaoUltra}>
            <img
              className={styles.Ultra24}
              src={MasterUltra}
              alt="Cartão Ultra"
            />
            <img className={styles.CardUltra} src={EloUltra} alt="Elo Ultra" />
          </div>
          <div className={styles.FinalUltra}>
            <p>
              Pagar com: <span className={styles.PagaS24U}> CARTÃO</span>
            </p>
            <p className={styles.FinalNumberU}>9472*</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalaxyS24Ultra;
