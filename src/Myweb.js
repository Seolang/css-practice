import styles from "./Myweb.module.css";

const Myweb = () => {
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={`${styles.box} ${styles.item1}`}>1</div>
                <div className={`${styles.box} ${styles.item2}`}>2</div>
                <div className={`${styles.box} ${styles.item3}`}>3</div>
                <div className={`${styles.box} ${styles.item4}`}>4</div>
                <div className={`${styles.box} ${styles.item5}`}>5</div>
                <div className={`${styles.box} ${styles.item6}`}>6</div>
                

            </div>
        </div>

    )
}

export default Myweb