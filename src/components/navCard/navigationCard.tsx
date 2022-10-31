import React, {FC} from "react";
import styles from "./navigationCard.module.sass";
import rightArrow from "../../assets/images/rightArrow.png"
import {Link} from "react-router-dom";

interface NavCardProps {
    title: string,
    text: string,
    bgImg: string,
    link: string
}

const NavCard: FC<NavCardProps> = (props) => {
    const {
        title,
        text,
        bgImg,
        link
    } = props;

    return (
        <div className={styles.navCard__wrapper}>
            <div className={styles.navCard}>
                <div className={styles.navCardContent}>
                    <h1 className={styles.navCardTitle}>{title}</h1>
                    <p className={styles.navCardText}>{text}</p>
                    <Link to={link} className={styles.navCardBtn}>
                        <img src={rightArrow} alt=""/>
                    </Link>
                </div>
                <div className={styles.navCardImgWrapper}>
                    <img className={styles.navCardImg} src={bgImg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default NavCard;

