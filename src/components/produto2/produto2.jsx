import styles from "../produto2/produto2.module.css";
import Button from "../button/button";
import GalaxyS25Ultra from "../../assets/img/samsung-titanio.png";
// import MasterCard2 from "../../assets/img/masterCard.svg";
import EloUltra from "../../assets/img/cartaoElo.svg";

const Produto2 = () => {
  return (
    <section className={styles.Produto2}>
      <div className={styles.WrapperProduto2}>
        <div className={styles.imgProduto2}>
          <img src={GalaxyS25Ultra} alt="Galaxy S25 Ultra" />
        </div>

        <div>
          <div className={styles.ContentProduto2}>
            <h2>Celular Samsung Galaxy S25 Ultra 5G</h2>
            <p className={styles.PrecoVistaUltra}>
              R$11.699,10 <span>À vista</span>
            </p>
            <h3>Sobre o item:</h3>
            <ul>
              <li>Titânio Ultrarresistente</li>
              <li>Dynamic LTPO AMOLED 2x 6,9 polegadas QHD+ 120 Hz</li>
              <li>
                200 MP + 50 MP periscópio + 10 MP teleobjetiva + 12 MP ultrawide
                / 12 MP frontal
              </li>
              <li>
                Snapdragon 8 Elite + 12 GB de RAM + 256/512 GB ou 1 TB de
                armazenamento
              </li>
              <li>Bateria 5000 mAh</li>
            </ul>
          </div>
        </div>
        <div className={styles.PrecoCelularUltra}>
          <h4>R$ 11.699,10</h4>
          <p className={styles.ParcelaUltra}>a partir de 18x de R$ 722,16</p>
          <p className={styles.PrecoFrete2}>
            <span>Receba </span> até 6 de Maio
          </p>
          <p className={styles.Frete2}>Frete Grátis</p>

          <p className={styles.EstoqueUltra25}>Em Estoque</p>
          <div className={styles.Buybtn}>
            <Button>Comprar Agora</Button>
          </div>

          <div className={styles.imgCartao2}>
            {/* <img
              className={styles.Master2}
              src={MasterCard2}
              alt="Cartão Mastercard-2"
            /> */}
            <img
              className={styles.EloUltra}
              src={EloUltra}
              alt="Cartão Elo Ultra"
            />
          </div>
          <div className={styles.LastText2}>
            <p>
              Pagar com: <span className={styles.PagaCartao2}> CARTÃO</span>
            </p>
            <p className={styles.Numero2}>5378*</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produto2;
