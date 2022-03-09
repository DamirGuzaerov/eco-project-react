import React, {useState} from "react";
import styles from "./header.module.sass";
import Icon from "../ui/icon/icon";
import logo from "../../assets/images/logo.svg"
import {ModalTemplate} from "../modals/modalTemplate";
import {LoginModal} from "../modals/loginModal/loginModal";

function Header() {
    const [visible, setVisible] = useState(false);
    return (
            <div className={styles.header__wrapper}>
                <ModalTemplate visible={visible} onClose={() => {setVisible(false)}} children={LoginModal(() => setVisible(false))}/>
                <header className={styles.header}>
                    <nav className={styles.navPanel}>
                        <div className={styles.header__logo}>
                            <object data={logo} type=""/>
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
                                <Icon name={"mapPointer"} width={24} height={24}/>
                            </div>
                                Казань
                        </li>
                        <li className={styles.navLink} onClick={() => {setVisible(true)}}>
                            <div className={styles.headerIcon}>
                                <Icon name={"login"} width={24} height={24}/>
                            </div>
                                Войти
                        </li>
                    </ul>
                </header>
            </div>
    );
}

export default Header;

