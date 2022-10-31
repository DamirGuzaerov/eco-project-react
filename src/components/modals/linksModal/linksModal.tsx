import {ModalTemplate} from "../modalTemplates/modalTemplate";
import {Link} from "react-router-dom";
import styles from './linksModalStyles.module.sass'
import {useStores} from "../../../utils/hooks/use-stores";
import ecocoin from '../../../assets/images/ecoCoin.svg';
import {LoginModal} from "../loginModal/loginModal";
import {RegModal} from "../regModal/regModal";


export const LinksModal = () => {
    const {
        authorizationStore: {getIsAuth, getUserInfo},
        modalStore: {removeModal, addModal}
    } = useStores();

    const openModal = (modal: any) => {
        removeModal();
        addModal(modal)
    }

    return (
        <ModalTemplate title={''}>
            {getIsAuth() ? (<div className={styles.modal__profile_row}>
                <img src={getUserInfo().photo_url} className={styles.profile__image}/>
                <div className={styles.modal__profile_info}>
                    <p>
                        1231
                    </p>
                    <div className={styles.modal__balance}>
                        <img src={ecocoin}/>
                        <p className={styles.balance}>
                            {getUserInfo().balance}
                        </p>
                    </div>
                </div>
            </div>) : null}
            <ul className={styles.ul_links}>
                {!getIsAuth() ? (
                    <>
                        <li>
                            <button className={styles.link} onClick={() => openModal(LoginModal)}>
                                Войти
                            </button>
                        </li>

                        <li>
                            <button className={styles.link} onClick={() => openModal(RegModal)}>
                                Регистрация
                            </button>
                        </li>
                    </>
                ) : null}
                <li>
                    <Link className={styles.link} onClick={() => removeModal()} to={'/'}>
                        Главная
                    </Link>
                </li>

                <li>
                    <Link className={styles.link} onClick={() => removeModal()} to={'/collectionPoints'}>
                        Пункты сбора
                    </Link>
                </li>

                <li>
                    <Link className={styles.link} onClick={() => removeModal()} to={'/ecoMarket'}>
                        ЭкоМаркет
                    </Link>
                </li>

                <li>
                    <Link className={styles.link} onClick={() => removeModal()} to={'/about'}>
                        О сервисе
                    </Link>
                </li>
            </ul>
        </ModalTemplate>
    )
}