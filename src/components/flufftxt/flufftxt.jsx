import styles from "../flufftxt/flufftxt.module.css";
import CPU from "../../assets/img/sCPU.jpg";
import Bat from "../../assets/img/sBat.jpg";

const flufftxt = () => {
  return (
    <section className={styles.flufftxt}>
      <div className={styles.flufftxtWrapper}>
        <div className={styles.flufftxtCPU}>
          <div>
            <img src={CPU} alt="" />
          </div>
          <div className={styles.flufftxtTxt}>
            <h2>Processador líder do setor personalizado para o Galaxy</h2>
            <p>
              Apresentando nosso primeiro processador de 3 nm para dispositivos
              móveis da série S. O IP exclusivo do Galaxy, que inclui o
              ProScaler e a tecnologia Mobile Digital Natural Image (mDNIe), foi
              implementado em nosso AP personalizado. Esses chipsets de última
              geração aceleram todos os aspectos do desempenho, proporcionando
              melhorias gerais para sua experiência de jogo e visualização. Este
              processador de última geração, que inclui aprimoramentos de CPU,
              GPU e NPU, oferece aprimoramentos impressionantes para jogos e AI,
              transformando a maneira como você cria, trabalha e joga.
            </p>
          </div>
        </div>
        <div className={styles.flufftxtBat}>
          <div className={styles.flufftxtTxt}>
            <h2>Vida útil otimizada da bateria, mais entretenimento</h2>
            <p>
              Além de baterias simplesmente poderosas, o software e o hardware
              Galaxy foram otimizados para durar mais tempo. A tecnologia Mobile
              Digital Natural Image (mDNIe), incluída em nosso exclusivo IP do
              Galaxy, foi incorporada em nosso processador personalizado para
              reduzir o consumo atual do display, aumentando o tempo de uso da
              bateria. Nossa bateria de alto desempenho de 5.000 mAh fornece
              mais de 31 horas de visualização de vídeo.
            </p>
          </div>
          <div>
            <img src={Bat} alt="" />
          </div>
        </div>
        <div className={styles.flufftxtBtn}>
            <a href="/Samsung-S25-Ultra">Veja o Galaxy S25 Ultra</a>
        </div>
      </div>
    </section>
  );
};

export default flufftxt;
