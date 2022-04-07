import React, {useEffect} from "react";
import styles from "./header.module.sass";
import Icon from "../ui/icon/icon";
import logo from "../../assets/images/logo.svg"
import {LoginModal} from "../modals/loginModal/loginModal";
import {useStores} from "../../utils/hooks/use-stores";
import {observer} from "mobx-react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import ecocoin from '../../assets/images/ecoCoin.svg';

const Header = observer(() => {
    const {
        modalStore: {addModal, removeModal},
        authorizationStore: {getIsAuth, getUserInfo}
    } = useStores();
    const navigate = useNavigate();
    const goToProfile = () => navigate('/profile');

    useEffect(() => {

    }, [getIsAuth()])

    const nonAuthDisplay = () => {
        return (
            <li className={styles.navLink} onClick={() => openModal(LoginModal)}>
                <div className={styles.headerIcon}>
                    <Icon name={"login"} width={24} height={24}/>
                </div>
                Войти
            </li>
        )
    }

    const authDisplay = () => {
        return (
            <>
                <li className={`${styles.navLink} ${styles.header_balance}`}>
                    <div className={styles.headerIcon}>
                        <img src={ecocoin} width={24} height={24}/>
                    </div>
                    <p>{getUserInfo().balance}</p>
                </li>

                <Link to={'/profile/promo_codes'} className={styles.navLink}>
                    <div className={styles.headerIcon}>
                        <img src={getUserInfo().photo_url} className={styles.photo_header}/>
                    </div>
                    <p>{getUserInfo().username}</p>
                </Link>
            </>
        )
    }

    const openModal = (modal: any) => {
        removeModal();
        addModal(modal);
    }

    return (
        <div className={styles.header__wrapper}>
            <header className={styles.header}>
                <nav className={styles.navPanel}>
                    <div className={styles.header__logo}>
                        <object data={logo} type=""/>
                    </div>
                    <ul className={styles.navList}>
                        <li className={styles.navLink}>
                            <NavLink
                                className={({ isActive }) => isActive ? styles.mainNavLinkActive : styles.mainNavLink}
                                to={"/"}>
                                Главная
                            </NavLink>
                        </li>
                        <li className={styles.navLink}>
                            <NavLink
                                className={({ isActive }) => isActive ? styles.mainNavLinkActive : styles.mainNavLink}
                                to={"/collectionPoints"}>
                                Пункты сбора
                            </NavLink>
                        </li>
                        <li className={styles.navLink}>
                            <NavLink
                                className={({ isActive }) => isActive ? styles.mainNavLinkActive : styles.mainNavLink}
                                to={"/ecoMarket"}>
                                ЭкоМаркет
                            </NavLink>
                        </li>
                        <li className={styles.navLink}>
                            <NavLink
                                className={({ isActive }) => isActive ? styles.mainNavLinkActive : styles.mainNavLink}
                                to={"/about"}>
                                О сервисе
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <ul className={styles.navList}>
                    <li className={`${styles.navLink_city} ${styles.navLink}`}>
                        <div className={styles.headerIcon}>
                            <Icon name={"mapPointer"} width={24} height={24}/>
                        </div>
                        Казань
                    </li>
                    {getIsAuth() ? authDisplay() : nonAuthDisplay()}
                </ul>
            </header>
        </div>
    );
});

export default Header;

