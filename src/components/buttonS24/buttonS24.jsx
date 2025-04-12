import styles from "../buttonS24/buttonS24.module.css"

const ButtonS24 = (props, link) => {
    return (
        <div className={styles.WrapperButtonS24}>
             <a href={link} className={styles.linkBtn} {...props}></a>
        </div>
    )
}

export default ButtonS24;