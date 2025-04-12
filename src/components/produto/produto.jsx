import styles from "../produto/produto.module.css";
import Button from "../button/button";
import GalaxyS25Plus from "../../assets/img/samsung-azul.png";
import MasterCard from "../../assets/img/MasterCard.svg";
import EloPlus from "../../assets/img/cartaoElo.svg";

const Produto = () => {
  return (
    <section className={styles.Produto}>
      <div className={styles.WrapperProduto}>
        <div className={styles.imgProduto}>
          <img src={GalaxyS25Plus} alt="Galaxy S25 azul-marinho" />
        </div>
        <div>
          <div className={styles.ContentProduto}>
            <h2>Celular Samsung Galaxy S25+ 5G</h2>
            <p className={styles.PrecoVista}>
              R$ 7.640,00 <span>À vista</span>
            </p>
            <h3>Sobre o item:</h3>
            <ul>
              <li>Câmera Tripla Traseira de até 50MP (Estabilização Óptica)</li>
              <li>Selfie de 13MP</li>
              <li>Tela Infinita Super AMOLED de 6.5"" 120 Hz</li>
              <li>Som Estéreo Dolby Atmos</li>
              <li>Gravação de vídeos em 4K</li>
              <li>Memória Interna de 256GB* e 8GB de RAM</li>
              <li>Processador Octa-Core</li>
              <li>Bateria de longa duração de 5.000mAh</li>
              <li>Dual Chip, Dual Messenger, Cadeado Galaxy</li>
            </ul>
          </div>
        </div>
        <div className={styles.PrecoCelular}>
          <h4>R$ 7.640,00</h4>
          <p className={styles.Parcela}>a partir de 18x de R$ 527,72</p>
          <p className={styles.PrecoFrete}>
            <span>Receba </span> até 15 de Abril
          </p>
          <p className={styles.Frete}>Frete Grátis</p>

          <p className={styles.Estoque25Plus}>Em Estoque</p>
          <div className={styles.Buybtn}>
            <Button>Comprar Agora</Button>
          </div>

          <div className={styles.imgCartao}>
            <img
              className={styles.Plus}
              src={MasterCard}
              alt="Cartão Mastercard"
            />
            <img
              className={styles.EloPlus}
              src={EloPlus}
              alt="Cartão Elo PLUS"
            />
          </div>
          <div className={styles.LastText}>
            <p>
              Pagar com: <span className={styles.PagaCartao}> CARTÃO</span>
            </p>
            <p className={styles.Numero}>5378*</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produto;
