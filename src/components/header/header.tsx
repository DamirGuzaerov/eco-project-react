import React, {useState} from "react";
import styles from "./header.module.sass";
import Icon from "../ui/icon/icon";
import logo from "../../assets/images/logo.svg"
import {ModalTemplate} from "../modals/modalTemplate";
import {LoginModal} from "../modals/loginModal/loginModal";
import {useStores} from "../../utils/hooks/use-stores";
import {observer} from "mobx-react";
import {Link, useNavigate} from "react-router-dom";

const Header = observer(() => {

    const { modalStore: {addModal, removeModal},
    authorizationStore:{GetToken}} = useStores();
    const navigate = useNavigate();
    const goToProfile = () => navigate('/profile');


    const openModal = (modal: any) => {
        if (GetToken() != "") {
            goToProfile();
            return;
        }
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
                                    <Link to={"/"}>
                                    Главная
                                    </Link>
                                </li>
                            <li className={styles.navLink}>
                                Пункты сбора
                            </li>
                            <li className={styles.navLink}>
                                ЭкоМаркет
                            </li>
                            <li className={styles.navLink}>
                                О сервисе
                            </li>
                        </ul>
                    </nav>
                    <ul className={styles.navList}>
                        <li className={styles.navLink}>
                            <div className={styles.headerIcon}>
                                <Icon name={"mapPointer"} width={24} height={24}/>
                            </div>
                                Казань
                        </li>
                        <li className={styles.navLink} onClick={() => openModal(LoginModal)}>
                                <div className={styles.headerIcon}>
                                    <Icon name={"login"} width={24} height={24}/>
                                </div>
                                Войти
                        </li>
                    </ul>
                </header>
            </div>
    );
});

export default Header;

