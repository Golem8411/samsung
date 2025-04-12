import styles from "../galaxyZfold/zFold.module.css";
import GalaxyZFold from "../../assets/img/samsung-prata.png";
import MasterZfold from "../../assets/img/othercard.svg";
import EloZFold from "../../assets/img/cartaoElo.svg";
import ButtonZFold from "../button/button";

const Zfolder6 = () => {
  return (
    <section className={styles.GalaxyZFold}>
      <div className={styles.WrapperZfold}>
        <div className={styles.imgZfold}>
          <img src={GalaxyZFold} alt="Galaxy prata" />
        </div>

        <div>
          <div className={styles.ContentZfold}>
            <h2>Celular Samsung Galaxy ZFold6</h2>
            <p className={styles.PrecoZvista}>
              R$ 13.109,05 <span>À vista</span>
            </p>
            <h3>Sobre o item:</h3>
            <ul>
              <li>Memória interna: 512 GB</li>
              <li>Câmera traseira principal: 50 Mpx</li>
              <li>Câmera frontal principal: 10 Mpx</li>
              <li>Desbloqueio: Impressão digital e reconhecimento facial</li>
              <li> Capacidade da Bateria de 4400mAh</li>
              <li>Tamanho da Tela de 7.6" + 6.3"</li>
            </ul>
          </div>
        </div>
        <div className={styles.PrecoZFold}>
          <h4>R$ 13.109,05</h4>
          <p className={styles.ParcelaZFold}>a partir de 18x de R$ 766,61</p>
          <p className={styles.FreteZFold}>
            <span>Receba </span> até 15 de Abril
          </p>

          <p className={styles.FreteZFold6}>Frete Grátis</p>

          <p className={styles.EstoqueZFold}>Em Estoque</p>
          <div className={styles.Buybtn}>
            <ButtonZFold>Comprar Agora</ButtonZFold>
          </div>

          <div className={styles.imgCartaoZFold}>
            <img className={styles.Fold} src={MasterZfold} alt="Master Z" />
            <img className={styles.EloFold} src={EloZFold} alt="Elo Z" />
          </div>
          <div className={styles.FinalZfold}>
            <p>
              Pagar com: <span className={styles.PagaZfold}> CARTÃO</span>
            </p>
            <p className={styles.FinalNumberZ}>5321*</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Zfolder6;
