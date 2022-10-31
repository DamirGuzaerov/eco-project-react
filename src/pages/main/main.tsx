import React from "react";
import BannerSwiper from "../../components/swiper/bannerSwiper";
import styles from "./main.module.sass";
import NavCard from "../../components/navCard/navigationCard";
import market from "../../assets/images/market.svg";
import map from "../../assets/images/map.svg";
function Main() {
    return (
            <main className={styles.mainCards__wrapper}>
                <BannerSwiper/>
                <div className={styles.navCardsWrapper}>
                    <div className={styles.navCards}>
                        <NavCard text={"Посмотри, где в твоем городе \nможно сдать вторсырьё \nна переработку"}
                                 title={"Пункты сбора"}
                                 bgImg={map}
                                 link={'/collectionPoints'}
                        />
                        <NavCard text={"Используй заработанные  \nэкокоины для покупки товаров  \nиз переработанных материалов "}
                                 title={"ЭкоМаркет"}
                                 bgImg={market}
                                 link={'/ecomarket'}
                        />
                    </div>
                </div>
            </main>
    );
}

export default Main;

