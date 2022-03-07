import React, {FC} from "react";
import styles from "./banner.module.sass";
import Icon from "../ui/icon/icon";

interface BannerProps{
    title:string,
    text:string,
    btnText:string,
    bgColor:string,
    bgImg:string,
}

const Banner :FC<BannerProps> = (props) => {

    const {
        bgColor,
        title,
        text,
        btnText,
        bgImg} = props;

    return (
        <div className={styles.bannerWrapper} >
            <div className={styles.banner} style={{"backgroundColor": `${bgColor}`}}>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>{title}</h1>
                    <p className={styles.bannerText}>{text}</p>
                    <button className={styles.bannerBtn}>
                        <span className={styles.bannerBtnText}>{btnText}</span>
                    </button>
                </div>
                <div className={styles.bannerImg}>
                    <object data={bgImg} type=""/>
                </div>
            </div>
        </div>
    );
}

export default Banner;

