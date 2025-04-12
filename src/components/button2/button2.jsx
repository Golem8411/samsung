import styles from "../button2/button2.module.css"

const Button2 = (props, link) => {
    return (
    <div className={styles.WrapperButton2}>
        <a href={link} className={styles.linkBtn} {...props}></a>
    </div>
    )
}

export default Button2;