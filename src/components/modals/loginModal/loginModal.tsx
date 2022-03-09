import defaultModalStyles from './../modal.module.sass';
import Icon from "../../ui/icon/icon";
import {Link} from "react-router-dom";

export const LoginModal = (setVisible: Function) => {

    return(
        <div className={defaultModalStyles.modal__container}>
            <div className={defaultModalStyles.modal__firstrow}>
                <h2>Вход</h2>
                <button className={defaultModalStyles.modal__closeButton} onClick={() => setVisible()}>
                    <Icon name={'closeButton'} width={18} height={18}/>
                </button>
            </div>

            <div className={defaultModalStyles.modal_content}>
                <form className={defaultModalStyles.modal__form_container}>
                    <input placeholder={'Телефон'} type={'tel'}/>
                    <input placeholder={'Пароль'} type={'password'}/>
                    <button className={defaultModalStyles.modal__sendButton}>
                        <p>Войти</p>
                    </button>
                </form>
                <div className={defaultModalStyles.modal__underLinks}>
                    <Link to={''}>
                        Войти с помощью смс
                    </Link>
                    <Link to={''}>
                        Регистрация
                    </Link>
                </div>
                <button className={defaultModalStyles.modal__enterForPartnersButton}>
                    Вход для партнёров
                </button>
            </div>
        </div>
    )
}