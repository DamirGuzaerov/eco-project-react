import React, {FC} from "react";
import styles from './productCard.module.sass'
import costIcon from '../../../assets/images/img_2.png'

interface ProductCardProps{
    imgUrl:string,
    brand:string,
    productName:string,
    productType:string,
    cost:string
}
const ProductCard: FC<ProductCardProps> = (props) => {
    const {
        imgUrl,
        brand,
        productName,
        productType,
        cost
    } = props;

    return (
        <div className={styles.productCardWrapper}>
            <div className={styles.productCardImgWrapper}>
                <h5 className={styles.productBrand}>{brand}</h5>
                <img src={imgUrl} alt=""/>
            </div>
            <h4 className={styles.productName}>{productName}</h4>
            <h4 className={styles.productType}>{productType}</h4>
            <div className={styles.productCost}>
                <img className={styles.costIcon} src={costIcon} alt=""/>
                {cost}
            </div>
        </div>
    );
}

export default ProductCard;

