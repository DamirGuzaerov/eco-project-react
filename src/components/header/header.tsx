import React from "react";
import styles from "./header.module.sass";
import Icon from "../ui/icon/icon";
import logo from "../../assets/images/logo.svg"

function Header() {
    return (
            <div className={styles.header__wrapper}>
                <header className={styles.header}>
                    <nav className={styles.navPanel}>
                        <div className={styles.header__logo}>
                            <object data={logo} type=""></object>
                        </div>
                        <ul className={styles.navList}>
                            <li className={styles.navLink}>
                                Главная
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
                                <Icon name={"mapPointer"} width={24} height={24}></Icon>
                            </div>
                                Казань
                        </li>
                        <li className={styles.navLink}>
                            <div className={styles.headerIcon}>
                                <Icon name={"login"} width={24} height={24}></Icon>
                            </div>
                                Войти
                        </li>
                    </ul>
                </header>
            </div>
    );
}

export default Header;

