import styles from "./cardsListSwitcher.module.sass"
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router-dom";

export const CardsListSwitcher = () => {
    return(
        <>
            <div className={styles.switcherWrapper}>
                <div className={styles.switcherNav}>
                    <NavLink
                        className={({ isActive }) => isActive ? styles.switchBtnActive : styles.switchBtn}
                        to={"promo_codes"}
                        children={"Промокоды"}/>
                    <NavLink
                        className={({ isActive }) => isActive ? styles.switchBtnActive : styles.switchBtn}
                        to={"history"}>
                        История
                    </NavLink>
                </div>
                <Outlet/>
            </div>

        </>
    )
}

export default CardsListSwitcher