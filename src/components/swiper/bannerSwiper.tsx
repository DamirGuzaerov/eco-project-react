import React from "react";
import { Navigation } from 'swiper';
import {Swiper,SwiperSlide} from "swiper/react";
import Banner from "../banner/banner";
import styles from "./bannerSwiper.module.sass"
import recycling from "../../assets/images/recycling.svg"
import flowers from "../../assets/images/flowers.svg"
import masks from "../../assets/images/masks.svg"

function BannerSwiper() {
    return (
        <div className={styles.customSwiperWrapper}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className={styles.customSwiper}
            >
                <SwiperSlide>
                    <Banner
                        title="Сделаем мир чище"
                        text={'Сдай макулатуру или старую одежду и получи скидку \n на покупку товаров из переработанных материалов'}
                        btnText={'Условия сервиса'}
                        bgColor={"#B3EDC8"}
                        bgImg = {recycling}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Banner
                        title="А вы знали..."
                        text={"что среднее время разложения пластмассовых изделий колеблется \n от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет? "}
                        btnText={'Узнать больше'}
                        bgColor={"#FFE48F"}
                        bgImg = {flowers}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Banner
                        title="Что с масками?"
                        text={"Медицинские маски не обязательно должны становиться отходами. \n Их тоже можно сдать на переработку."}
                        btnText={'Пункты сбора масок'}
                        bgColor={"#BFF0DE"}
                        bgImg = {masks}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default BannerSwiper;

