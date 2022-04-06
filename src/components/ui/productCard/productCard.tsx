import React, {FC, useState} from "react";
import styles from './productCard.module.sass'
import costIcon from '../../../assets/images/img_2.png'
import {useSpring, animated, easings} from 'react-spring'


interface ProductCardProps {
    imgUrl: string,
    brand: string,
    productName: string,
    productType: string,
    cost: string
}

const ProductCard: FC<ProductCardProps> = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const {
        imgUrl,
        brand,
        productName,
        productType,
        cost
    } = props;

    const styling = useSpring({
        from: {
            background: 'rgba(255, 255, 255, 0.1)',
            x: 0
        },
        to: {
            background: 'rgba(255, 255, 255, 0)',
            x: 250
        },
        config: {
            duration: 1000,
        },

        reset: true,
        loop: true


    })


    return <div className={styles.productCardWrapper}>
        <div className={styles.productCardImgWrapper}>
            {isLoading ? (<div style={{
                width: 274,
                height: 240,
                backgroundColor: '#f2f2f2',
                borderRadius: 16,
            }}><animated.div style={{
                width: 60,
                height: 240,
                borderRadius: 16,
                transform: 'skewX(-30deg)',
                boxShadow: '0 0 30px 30px rgba(255, 255, 255, 255, 0.05)',
                ...styling
            }}
            /></div>) : (<><h5 className={styles.productBrand}>{brand}</h5><img src={imgUrl} alt=""/></>)}
        </div>
        {isLoading ? (<div style={{
                width: 274,
                height: 50,
                marginTop: 5,
                backgroundColor: '#f2f2f2',
                borderRadius: 16,
            }}>
                <animated.div style={{
                    width: 60,
                    borderRadius: 16,
                    height: 50,
                    transform: 'skewX(-30deg)',
                    boxShadow: '0 0 30px 30px rgba(255, 255, 255, 255, 0.05)',
                    ...styling
                }}
                />

            </div>) :
            (<><h4 className={styles.productName}>{productName}</h4><h4
                className={styles.productType}>{productType}</h4>
                <div className={styles.productCost}>
                    <img className={styles.costIcon} src={costIcon} alt=""/>
                    {cost}
                </div>
            </>)}
    </div>

}

export default ProductCard;

