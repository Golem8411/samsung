import styles from "../buttonZflip/buttonZflip.module.css"

const ButtonFlip = (props, link) => {
    return (
    <div className={styles.WrapperButtonFlip}>
        <a href={link} className={styles.linkBtn} {...props}></a>
    </div>
    )
}

export default ButtonFlip;