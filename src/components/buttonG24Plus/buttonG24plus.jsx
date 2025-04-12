import styles from "../buttonG24Plus/buttonG24plus.module.css"

const ButtonGS24Plus  = (props, link) => {
    return (
        <div className={styles.WrapperButtonS24P}>
             <a href={link} className={styles.linkBtn} {...props}></a>
        </div>
    )
}

export default ButtonGS24Plus;