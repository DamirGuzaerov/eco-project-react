import {inspect} from "util";
import styles from './market.module.sass'
import balanceLogo from '../../assets/images/img_2.png'
import ProductCard from "../../components/ui/productCard/productCard";
import imgUrl from "../../assets/images/img_1.png";
import React, {useEffect} from "react";
import {Filter} from "../../components/filters/filter";
import {useStores} from "../../utils/hooks/use-stores";
import {PromoCodeModal} from "../../components/modals/promoCodeModal/promoCodeModal";
import axios from "axios";

const Market = () => {
    const {modalStore: {addModal, removeModal}} = useStores();

    useEffect(() => {
        axios.get('/market', {
            params: {
                page_number: 1,
                page_size: 6,
                sexes: 'MAN',
                item_categories: 'SHOES',
                shops_id: 'nike'
            }
        }).then((r) => {
            console.log(r);
        }).catch((e) => {
            console.log(e);
        })
    }, [])
    return (
        <div className={styles.marketWrapper}>
            <div className={styles.marketTitleWrapper}>
                <h1>ЭкоМаркет</h1>
                <div className={styles.filterChipsWrapper}>
                    <button className={styles.filterChipsActive}>По популярности</button>
                    <button className={styles.filterChips}>По цене</button>
                    <button className={styles.filterChips}>По новизне</button>
                </div>
            </div>
            <div className={styles.mainContentWrapper}>
                <div className={styles.temp}>
                    <Filter/>
                    <button className={styles.removeFiltersBtn}>Сбросить фильтры</button>
                </div>
                <div className={styles.productsTable}>
                    <div className={styles.productsTableRow}>
                        {/*<div className={styles.balanceCard}>*/}
                        {/*    <div className={styles.balanceCardTitle}>*/}
                        {/*        На вашем балансе*/}
                        {/*        <img className={styles.balanceLogo} src={balanceLogo}></img>*/}
                        {/*        <div className={styles.balance}>200</div>*/}
                        {/*    </div>*/}
                        {/*    Вы можете обменять их на скидку 200 руб*/}
                        {/*    <button className={styles.promoCodeBtn} onClick={()=>addModal(PromoCodeModal)}>Получить промокод</button>*/}
                        {/*</div>*/}


                        <ProductCard
                            imgUrl={imgUrl}
                            brand={'Nike'}
                            productName={"Nike Air Max 2021"}
                            productType={"Мужская обувь"}
                            cost = {'1000'}
                        />
                        <ProductCard
                            imgUrl={imgUrl}
                            brand={'Nike'}
                            productName={"Nike Air Max 2021"}
                            productType={"Мужская обувь"}
                            cost = {'1000'}
                        />
                    </div>
                    <div className={styles.productsTableRow}>
                        <ProductCard
                            imgUrl={imgUrl}
                            brand={'Nike'}
                            productName={"Nike Air Max 2021"}
                            productType={"Мужская обувь"}
                            cost = {'1000'}
                        />
                        <ProductCard
                            imgUrl={imgUrl}
                            brand={'Nike'}
                            productName={"Nike Air Max 2021"}
                            productType={"Мужская обувь"}
                            cost = {'1000'}
                        />
                        <ProductCard
                            imgUrl={imgUrl}
                            brand={'Nike'}
                            productName={"Nike Air Max 2021"}
                            productType={"Мужская обувь"}
                            cost = {'1000'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Market