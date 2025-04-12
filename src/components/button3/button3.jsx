import styles from "../button3/button3.module.css"

const Button3 = (props, link) => {
    return (
        <div className={styles.WrapperButton3}>
            <a href={link} className={styles.linkBtn} {...props}></a>
        </div>
    )
}

export default Button3;