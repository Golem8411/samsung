import styles from "../buttonZfold/buttonZfold.module.css"

const ButtonZFold = (props, link) => {
    return (
    <div className={styles.WrapperButtonZFold6}>
        <a href={link} className={styles.linkBtn} {...props}></a>
    </div>
    )
}

export default ButtonZFold;