import React from "react";
import Header from "../../components/header/header";
import BannerSwiper from "../../components/swiper/bannerSwiper";
import styles from "./main.module.sass";
import NavCard from "../../components/navCard/navigationCard";
import Footer from "../../components/footer/footer";
import market from "../../assets/images/market.svg";
import map from "../../assets/images/map.svg";
function Main() {
    return (
        <div className={styles.mainPage}>
            <Header/>
            <div className={styles.mainCards__wrapper}>
                <BannerSwiper/>
                <div className={styles.navCardsWrapper}>
                    <div className={styles.navCards}>
                        <NavCard text={"Посмотри, где в твоем городе \nможно сдать вторсырьё \nна переработку"}
                                 title={"Пункты сбора"}
                                 bgImg={map}
                        />
                        <NavCard text={"Используй заработанные  \nэкокоины для покупки товаров  \nиз переработанных материалов "}
                                 title={"ЭкоМаркет"}
                                 bgImg={market}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Main;

