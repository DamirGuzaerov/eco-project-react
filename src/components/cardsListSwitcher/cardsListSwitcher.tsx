import styles from "./cardsListSwitcher.module.sass"
import {useState} from "react";

export const CardsListSwitcher = () => {
    const [isSwitched,setIsSwitched] = useState();

    return(
        <>
            <div className={styles.la}></div>
        </>
    )
}

export default CardsListSwitcher