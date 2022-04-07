import styles from "./promoCode.module.sass"
import img from "../../../assets/images/promoCodeCard.png"
import React from "react";

const PromoCodeCard = () => {
    return(
        <div className={styles.promoCodeCard}>
            <div className={styles.promoCodeImgWrapper}>
                <img src={img} alt="" className={styles.promoCodeImg}/>
            </div>
            <div className={styles.promoCodeCardInfoWrapper}>
                <ul className={styles.infoList}>
                    <li>
                        <label htmlFor="date">Дата создания:</label>
                        <p id="date" className={styles.promoCodeCardInfo}>25.09.2021</p>
                    </li>
                    <li>
                        <label htmlFor="link">Ссылка на товар:</label>
                        <p id="link" className={styles.promoCodeCardInfoLink}>
                            <a href="#" className={styles.link}>
                                adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu...
                            </a>
                        </p>
                    </li>
                </ul>
                <div className={styles.promoCodeBtnWrapper}>
                    <button className={styles.promoCodeBtn}>Показать qr-код</button>
                </div>
            </div>
        </div>
    )
}

export default PromoCodeCard