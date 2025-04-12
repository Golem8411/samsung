import styles from "../resuspecs/resuspecs.module.css";
import S25B from "../../assets/img/s25bateria.jpg";
import S25S from "../../assets/img/s25storage.jpg";
import S25UI from "../../assets/img/s25UI.jpg"

const resuspecs = () => {
  return (
    <section className={styles.resuspecs}>
      <div className={styles.resuspecsWrapper}>
        <div className={styles.resuspecsContainer}>
          <div>
            <img src={S25B} alt="" />
          </div>
          <div className={styles.resuspecsContent}>
            <h2>Vida útil da bateria incomparável</h2>
            <p>
              Nossa tecnologia pioneira mDNIe foi incorporada em nosso
              processador personalizado e, com a otimização de software, o tempo
              de uso da bateria é aprimorado para que você possa assistir a
              vídeos por horas.4
            </p>
            <h3>Assista a vídeos por até</h3>
            <span>
                <span className={styles.spanValue}>31</span>
                <span className={styles.spanUnits}>horas</span>
            </span>
          </div>
        </div>
        <div className={styles.resuspecsContainer2}>
            <div>
                <h2>Até 1 TB de armazenamento</h2>
                <p>Armazene tudo com 12 GB de memória e até 256 GB, 512 GB ou 1 TB de armazenamento.</p>
            </div>
            <div>
                <img src={S25S} alt="" />
            </div>
        </div>
        <div className={styles.resuspecsContainer3}>
            <h2>Novo One UI 7, criado para IA</h2>
            <img src={S25UI} alt="" />
        </div>
      </div>
    </section>
  );
};

export default resuspecs;
