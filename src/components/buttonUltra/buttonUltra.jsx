import styles from "../buttonUltra/buttonUltra.module.css"

const ButtonUltra = (props, link) => {
    return (
        <div className={styles.WrapperButtonUltra}>
             <a href={link} className={styles.linkBtn} {...props}></a>
        </div>
    )
}

export default ButtonUltra;